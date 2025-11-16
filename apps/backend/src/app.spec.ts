import "reflect-metadata";
import { Test } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import request from "supertest";
import { PrismaService } from "./prisma.service";
import { vi } from "vitest";
import { PlansModule } from "./modules/plans/plans.module";

describe("AppModule", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [PlansModule] })
      .overrideProvider(PrismaService)
      .useValue({ plan: { findMany: vi.fn().mockResolvedValue([]) } })
      .compile();
    app = moduleRef.createNestApplication();
    app.setGlobalPrefix("api");
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("exposes plans endpoint", async () => {
    await request(app.getHttpServer()).get("/api/plans").expect(200);
  });
});
