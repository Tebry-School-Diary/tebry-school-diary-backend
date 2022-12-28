import { Module } from '@nestjs/common';
import {CitiesModule} from "./Cities/cities.module";
import {DepartmentsModule} from "./Departments/departments.module";

@Module({
  imports: [CitiesModule, DepartmentsModule]
})
export class AppModule {}
