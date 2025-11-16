import { Module } from "@nestjs/common";
import { PayController } from "./pay.controller";
import { PayService } from "./pay.service";
import { PrismaService } from "../../prisma.service";
import { VouchersModule } from "../vouchers/vouchers.module";

@Module({
  imports: [VouchersModule],
  controllers: [PayController],
  providers: [PayService, PrismaService]
})
export class PayModule {}
