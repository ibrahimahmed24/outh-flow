import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-product.dto';
import { UpdateCategoryDto } from './dto/update-product.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const { name } = createCategoryDto;
    const existing = await this.prisma.category.findUnique({ where: { name } });

    if (existing) {
      throw new ConflictException('Category name already exists');
    }
    return this.prisma.category.create({ data: createCategoryDto });
  }

  async findAll() {
    return this.prisma.category.findMany({
      include: { products: true },
    });
  }

  async findOne(id: string) {
    const category = this.prisma.category.findUnique({
      where: { id },
      include: { products: true },
    });
    if (!category) {
      throw new ConflictException('Category not found');
    }
    return category;
  }
  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const { name } = updateCategoryDto;
    const existingCategory = await this.prisma.category.findUnique({
      where: { id },
    });
    if (!existingCategory) throw new NotFoundException('Category not found');

    if (name) {
      const nameExists = await this.prisma.category.findUnique({
        where: { name },
      });
      if (nameExists && nameExists.id !== id) {
        throw new ConflictException('Category name already exists');
      }
    }
    return this.prisma.category.update({
      where: { id },
      data: { name },
    });
  }

  async remove(id: string) {
    const existingCategory = await this.prisma.category.findUnique({
      where: { id },
    });
    if (!existingCategory) throw new NotFoundException('Category not found');

    await this.prisma.category.delete({ where: { id } });
    return { message: 'Category deleted successfully' };
  }
}
