import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { randomBytes } from "crypto";

@Injectable()
export class VouchersService {
  constructor(private readonly prisma: PrismaService) {}

  async redeem(code: string) {
    const voucher = await this.prisma.voucher.findUnique({ where: { code }, include: { plan: true } });
    if (!voucher) throw new NotFoundException("Voucher not found");
    if (voucher.status !== "UNREDEEMED") {
      throw new NotFoundException("Voucher already used");
    }
    return voucher;
  }

  async issue(planId: number, orderId?: number) {
    const code = randomBytes(6).toString("hex").toUpperCase();
    return this.prisma.voucher.create({
      data: { code, planId, validitySeconds: 86400, orderId }
    });
  }
}
