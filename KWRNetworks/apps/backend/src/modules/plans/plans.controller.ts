import { Controller, Get, Inject } from "@nestjs/common";
import { PlansService } from "./plans.service";

@Controller("plans")
export class PlansController {
  constructor(@Inject(PlansService) private readonly plansService: PlansService) {}

  @Get()
  findAll() {
    return this.plansService.findAll();
  }
}
