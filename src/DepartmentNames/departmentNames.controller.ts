import {Body, Controller, Delete, Get, HttpCode, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {DepartmentNamesService} from "./departmentNames.service";
import {DepartmentNameResponse} from "./Response/DepartmentNameResponse";
import {AddDepartmentNameDTO} from "./DTO/AddDepartmentNameDTO";
import {RemoveDepartmentNameDTO} from "./DTO/RemoveDepartmentNameDTO";

@Controller("/departmentName")
export class DepartmentNamesController {
    private readonly departmentNamesService: DepartmentNamesService;


    constructor(departmentNamesService: DepartmentNamesService) {
        this.departmentNamesService = departmentNamesService;
    }

    @HttpCode(200)
    @Get()
    public async GetAllDepartmentsName(): Promise<Array<DepartmentNameResponse> | never> {
        return await this.departmentNamesService.GetAllDepartmentsName();
    }

    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    public async AddDepartmentName(@Body() addDepartmentNameDTO: AddDepartmentNameDTO): Promise<boolean> {
        return await this.departmentNamesService.AddDepartmentName(addDepartmentNameDTO);
    }

    @HttpCode(200)
    @Delete()
    @UsePipes(ValidationPipe)
    public async RemoveDepartmentName(@Body() removeDepartmentNameDTO: RemoveDepartmentNameDTO): Promise<boolean> {
        return await this.departmentNamesService.RemoveDepartmentName(removeDepartmentNameDTO);
    }
}