import { Module } from '@nestjs/common';
import {CitiesModule} from "./Cities/cities.module";
import {DepartmentsModule} from "./Departments/departments.module";
import {DepartmentNamesModule} from "./DepartmentNames/departmentNames.module";
import {BuildingsModule} from "./Buildings/buildings.module";

@Module({
  imports: [CitiesModule, DepartmentsModule, DepartmentNamesModule, BuildingsModule]
})
export class AppModule {}
