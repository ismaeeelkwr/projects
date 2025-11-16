import { Module } from "@nestjs/common";
import { PortalController } from "./portal.controller";
import { VouchersModule } from "../vouchers/vouchers.module";

@Module({
  imports: [VouchersModule],
  controllers: [PortalController]
})
export class PortalModule {}
