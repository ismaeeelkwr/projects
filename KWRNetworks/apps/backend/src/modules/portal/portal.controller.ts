import { Body, Controller, Post } from "@nestjs/common";
import { VouchersService } from "../vouchers/vouchers.service";

@Controller("portal")
export class PortalController {
  constructor(private readonly vouchersService: VouchersService) {}

  @Post("authorize")
  async authorize(@Body("voucher_code") voucherCode: string) {
    try {
      const voucher = await this.vouchersService.redeem(voucherCode);
      return { result: "ALLOW", plan: voucher.plan.name };
    } catch (error) {
      return { result: "DENY" };
    }
  }

  @Post("logout")
  logout() {
    return { result: "BYE" };
  }
}
