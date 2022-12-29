import {Body, Controller, Delete, Get, HttpCode, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {BuildingsService} from "./buildings.service";
import {BuildingResponse} from "./Response/BuildingResponse";
import {AddBuildingDTO} from "./DTO/AddBuildingDTO";
import {RemoveBuildingDTO} from "./DTO/RemoveBuildingDTO";

@Controller("/building")
export class BuildingsController {
    private readonly buildingsService: BuildingsService;

    constructor(buildingsService: BuildingsService) {
        this.buildingsService = buildingsService;
    }

    @HttpCode(200)
    @Get()
    public async GetAllBuildings(): Promise<Array<BuildingResponse> | never> {
        return await this.buildingsService.GetAllBuildings();
    }

    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    public async AddBuilding(@Body() addBuildingDTO: AddBuildingDTO): Promise<boolean> {
        return await this.buildingsService.AddBuilding(addBuildingDTO);
    }

    @HttpCode(200)
    @Delete()
    @UsePipes(ValidationPipe)
    public async RemoveBuilding(@Body() removeBuildingDTO: RemoveBuildingDTO): Promise<boolean> {
        return await this.buildingsService.RemoveBuilding(removeBuildingDTO);
    }
}