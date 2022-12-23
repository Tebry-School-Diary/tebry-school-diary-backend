import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {databaseConnection} from "./Database/DatabaseConnection";
import * as process from "process";
require("dotenv").config();

async function bootstrap() {
  await databaseConnection.initialize()
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
