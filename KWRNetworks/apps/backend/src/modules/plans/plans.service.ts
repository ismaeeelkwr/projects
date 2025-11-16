import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";

@Injectable()
export class PlansService {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.plan.findMany({ where: { active: true } });
  }
}
