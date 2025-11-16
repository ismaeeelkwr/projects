import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  latest() {
    return this.prisma.wanStatus.findFirst({ orderBy: { checkedAt: "desc" } });
  }
}
