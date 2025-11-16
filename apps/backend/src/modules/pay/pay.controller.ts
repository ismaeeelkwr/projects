import { Body, Controller, Post } from "@nestjs/common";
import { PayService } from "./pay.service";

@Controller("pay")
export class PayController {
  constructor(private readonly payService: PayService) {}

  @Post("init")
  init(@Body() body: { email: string; planId: number; quantity: number }) {
    return this.payService.init(body.email, Number(body.planId), Number(body.quantity ?? 1));
  }

  @Post("webhook")
  webhook(@Body() payload: any) {
    return this.payService.webhook(payload);
  }
}
