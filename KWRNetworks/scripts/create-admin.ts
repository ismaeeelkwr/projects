import { PrismaClient, Role } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const [,, email, password] = process.argv;
if (!email || !password) {
  console.error("Usage: ts-node scripts/create-admin.ts <email> <password>");
  process.exit(1);
}

async function main() {
  const prisma = new PrismaClient();
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.upsert({
    where: { email },
    update: { passwordHash, role: Role.ADMIN },
    create: { email, passwordHash, role: Role.ADMIN }
  });
  console.log(`Admin ready: ${user.email}`);
  await prisma.$disconnect();
}

main();
