import { Module } from '@nestjs/common';
import {CitiesModule} from "./Cities/cities.module";
import {DepartmentsModule} from "./Departments/departments.module";
import {DepartmentNamesModule} from "./DepartmentNames/departmentNames.module";

@Module({
  imports: [CitiesModule, DepartmentsModule, DepartmentNamesModule]
})
export class AppModule {}
