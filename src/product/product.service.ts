import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';
import { contains } from 'class-validator';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProductDto) {
    const { name, categoryId } = dto;

    const existing = await this.prisma.product.findFirst({ where: { name } });
    if (existing) throw new BadRequestException('Product name already exists');

    if (categoryId) {
      const category = await this.prisma.category.findUnique({
        where: { id: categoryId },
      });
      if (!category) throw new NotFoundException('Category not found');
    }

    return this.prisma.product.create({ data: dto });
  }

  async findAll(filter: FilterProductDto) {
    const {
      search,
      minPrice,
      maxPrice,
      categoryId,
      page = 1,
      limit = 10,
    } = filter;

    const skip = (page - 1) * limit;

    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (categoryId) where.categoryId = categoryId;

    if (minPrice !== undefined) where.price = { gte: minPrice };
    if (maxPrice !== undefined) where.price = { ...where.price, lte: maxPrice };

    const [items, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        include: { category: true },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.product.count({ where }),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // 🟣 Find One
  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  // 🟠 Update
  async update(id: string, dto: UpdateProductDto) {
    const existing = await this.prisma.product.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Product not found');

    if (dto.name && dto.name !== existing.name) {
      const nameExists = await this.prisma.product.findFirst({
        where: { name: dto.name },
      });
      if (nameExists)
        throw new BadRequestException('Product name already exists');
    }

    return this.prisma.product.update({
      where: { id },
      data: dto,
    });
  }

  // 🔴 Delete
  async remove(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    await this.prisma.product.delete({ where: { id } });
    return { message: 'Product deleted successfully' };
  }
}
