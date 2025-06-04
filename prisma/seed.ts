import { PrismaClient } from './generated/prisma';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();



export default async function main() {  
  await prisma.user.createMany({
    data: Array.from({ length: 100 }).map(() => ({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      isEmailVerified: faker.datatype.boolean(),
      Provider: faker.helpers.arrayElement([ 
        "EMAIL_PASSWORD",
        "GOOGLE",
        "GITHUB",
        ]),
    })),
  });
}



main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});