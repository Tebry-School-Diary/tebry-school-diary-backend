import {Body, Controller, Delete, Get, HttpCode, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {UserRolesResponse} from "./Response/UserRolesResponse";
import {UserRolesService} from "./userRoles.service";
import {AddUserRoleDTO} from "./DTO/AddUserRoleDTO";
import {RemoveUserRoleDTO} from "./DTO/RemoveUserRoleDTO";

@Controller("/userRole")
export class UserRolesController{
    private readonly userRolesService: UserRolesService;

    constructor(userRolesService: UserRolesService) {
        this.userRolesService = userRolesService;
    }

    @HttpCode(200)
    @Get()
    public async GetAllRoles(): Promise<Array<UserRolesResponse> | never> {
        return await this.userRolesService.GetAllRoles();
    }

    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    public async AddUserRole(@Body() addUserRoleDTO: AddUserRoleDTO): Promise<boolean> {
        return await this.userRolesService.AddUserRole(addUserRoleDTO);
    }

    @HttpCode(200)
    @Delete()
    @UsePipes(ValidationPipe)
    public async DeleteUserRole(@Body() removeUserRoleDTO: RemoveUserRoleDTO): Promise<boolean> {
        return await this.userRolesService.DeleteUserRole(removeUserRoleDTO);
    }
}