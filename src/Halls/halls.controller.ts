import {HallsService} from "./halls.service";
import {Body, Controller, Delete, Get, HttpCode, Param, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {HallResponse} from "./Response/HallResponse";
import {AddHallDTO} from "./DTO/AddHallDTO";
import {RemoveHallDTO} from "./DTO/RemoveHallDTO";

@Controller("/hall")
export class HallsController {
    private readonly hallsService: HallsService;


    constructor(hallsService: HallsService) {
        this.hallsService = hallsService;
    }

    @HttpCode(200)
    @Get("/:id")
    public async GetAllHallByBuilding(@Param("id") buildingId: number): Promise<Array<HallResponse> | never> {
        return await this.hallsService.GetAllHallByBuilding(buildingId);
    }

    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    public async AddHall(@Body() addHallDTO: AddHallDTO): Promise<boolean> {
        return this.hallsService.AddHall(addHallDTO)
    }

    @HttpCode(200)
    @Delete()
    @UsePipes(ValidationPipe)
    public async RemoveHall(@Body() removeHallDTO: RemoveHallDTO): Promise<boolean> {
        return await this.hallsService.RemoveHall(removeHallDTO);
    }
}