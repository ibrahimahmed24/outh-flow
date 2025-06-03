import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

export default async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'Alice',
        email: 'alice@example.com',
        password: 'password123',
      },
      {
        name: 'Bob',
        email: 'bob@example.com',
        password: 'password456',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
