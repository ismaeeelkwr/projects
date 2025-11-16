import { Controller, Get } from "@nestjs/common";
import { StatusService } from "./status.service";

@Controller("status")
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get("wan")
  wan() {
    return this.statusService.latest();
  }
}
