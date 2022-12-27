import { Module } from '@nestjs/common';
import {CitiesModule} from "./Cities/cities.module";

@Module({
  imports: [CitiesModule]
})
export class AppModule {}
