import {Module} from "@nestjs/common";
import {DepartmentNamesController} from "./departmentNames.controller";
import {DepartmentNamesService} from "./departmentNames.service";

@Module({
    providers: [DepartmentNamesService],
    controllers: [DepartmentNamesController]
})
export class DepartmentNamesModule { }