import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { VouchersService } from "../vouchers/vouchers.service";

@Injectable()
export class PayService {
  constructor(private prisma: PrismaService, private vouchers: VouchersService) {}

  async init(email: string, planId: number, quantity: number) {
    const plan = await this.prisma.plan.findUnique({ where: { id: planId } });
    const reference = `PSK_${Date.now()}`;
    await this.prisma.order.create({
      data: {
        paystackReference: reference,
        email,
        metadata: { planId, quantity },
        amountKobo: (plan?.priceNGN ?? 0) * 100 * quantity,
        status: "PENDING"
      }
    });
    return { authorizationUrl: `https://paystack.mock/checkout/${reference}`, reference };
  }

  async webhook(payload: any) {
    if (payload.status === "success") {
      const order = await this.prisma.order.update({
        where: { paystackReference: payload.reference },
        data: { status: "SUCCESS" }
      });
      const planId = typeof payload.planId === "number" ? payload.planId : 1;
      await this.vouchers.issue(planId, order.id);
    }
    return { received: true };
  }
}
