import { Module } from '@nestjs/common';
import {CitiesModule} from "./Cities/cities.module";
import {DepartmentsModule} from "./Departments/departments.module";
import {DepartmentNamesModule} from "./DepartmentNames/departmentNames.module";
import {BuildingsModule} from "./Buildings/buildings.module";
import {HallTypesModule} from "./HallTypes/hallTypes.module";
import {HallsModule} from "./Halls/halls.module";
import {ProfessionsModule} from "./Professions/professions.module";

@Module({
  imports: [CitiesModule, DepartmentsModule, DepartmentNamesModule, BuildingsModule, HallTypesModule, HallsModule, ProfessionsModule]
})
export class AppModule { }
