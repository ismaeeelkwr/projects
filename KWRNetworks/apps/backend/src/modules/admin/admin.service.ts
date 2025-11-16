import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException();
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) throw new UnauthorizedException();
    return user;
  }
}
