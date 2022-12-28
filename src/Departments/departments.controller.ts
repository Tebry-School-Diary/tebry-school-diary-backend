import {Body, Controller, Delete, Get, HttpCode, Param, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {DepartmentsService} from "./departments.service";
import {DepartmentResponse} from "./Response/DepartmentResponse";
import {AddDepartmentDTO} from "./DTO/AddDepartmentDTO";
import {RemoveDepartmentDTO} from "./DTO/RemoveDepartmentDTO";

@Controller("/department")
export class DepartmentsController{
    private readonly departmentsService: DepartmentsService;

    constructor(departmentsService: DepartmentsService) {
        this.departmentsService = departmentsService;
    }

    @HttpCode(200)
    @Get()
    public async GetAllDepartments():  Promise<Array<DepartmentResponse> | never> {
        return await this.departmentsService.GetAllDepartments();
    }

    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    public async AddDepartmentDTO(@Body() addDepartmentDTO: AddDepartmentDTO): Promise<boolean>{
        return await this.departmentsService.AddDepartment(addDepartmentDTO);
    }

    @HttpCode(200)
    @Delete()
    @UsePipes(ValidationPipe)
    public async RemoveDepartment(@Body() removeDepartmentDTO: RemoveDepartmentDTO): Promise<boolean> {
        return await this.departmentsService.RemoveDepartment(removeDepartmentDTO);
    }
}