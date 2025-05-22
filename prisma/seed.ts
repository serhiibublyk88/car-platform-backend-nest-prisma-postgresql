import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import 'dotenv/config';

const prisma: PrismaClient = new PrismaClient();

async function main() {
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    throw new Error('Missing ADMIN_EMAIL or ADMIN_PASSWORD in .env');
  }

  const existing = await prisma.admin.findUnique({
    where: { email: process.env.ADMIN_EMAIL },
  });

  if (existing) {
    console.log('Admin already exists');
    return;
  }

  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

  await prisma.admin.create({
    data: {
      email: process.env.ADMIN_EMAIL,
      name: process.env.ADMIN_NAME ?? 'Admin',
      password: hashedPassword,
    },
  });

  console.log('✅ Admin created');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
