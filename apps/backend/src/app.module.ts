import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma.service";
import { PlansModule } from "./modules/plans/plans.module";
import { VouchersModule } from "./modules/vouchers/vouchers.module";
import { PayModule } from "./modules/pay/pay.module";
import { PortalModule } from "./modules/portal/portal.module";
import { StatusModule } from "./modules/status/status.module";
import { AdminModule } from "./modules/admin/admin.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PlansModule,
    VouchersModule,
    PayModule,
    PortalModule,
    StatusModule,
    AdminModule
  ],
  providers: [PrismaService]
})
export class AppModule {}
