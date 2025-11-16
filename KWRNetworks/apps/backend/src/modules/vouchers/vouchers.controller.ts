import { Body, Controller, Post } from "@nestjs/common";
import { VouchersService } from "./vouchers.service";

@Controller("vouchers")
export class VouchersController {
  constructor(private readonly vouchersService: VouchersService) {}

  @Post("redeem")
  redeem(@Body("voucherCode") voucherCode: string) {
    return this.vouchersService.redeem(voucherCode);
  }
}
