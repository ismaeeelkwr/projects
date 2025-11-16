import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import helmet from "helmet";
import cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.use(helmet());
  app.use(cookieParser());
  app.enableCors({ origin: [/localhost/, /kwrnetworks\.xyz$/], credentials: true });
  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`API listening on ${port}`);
}
bootstrap();
