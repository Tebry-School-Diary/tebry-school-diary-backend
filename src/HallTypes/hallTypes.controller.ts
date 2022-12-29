import {Body, Controller, Delete, Get, HttpCode, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {HallTypesService} from "./hallTypes.service";
import {HallTypeResponse} from "./Response/HallTypeResponse";
import {AddHallTypeDTO} from "./DTO/AddHallTypeDTO";
import {RemoveHallTypeDTO} from "./DTO/RemoveHallTypeDTO";

@Controller("hallType")
export class HallTypesController {
    private readonly hallTypesService: HallTypesService;

    constructor(hallTypesService: HallTypesService) {
        this.hallTypesService = hallTypesService;
    }

    @HttpCode(200)
    @Get()
    public async GetAllHallTypes(): Promise<Array<HallTypeResponse> | never> {
        return await this.hallTypesService.GetAllHallTypes();
    }

    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    public async AddHallType(@Body() addHallTypeDTO: AddHallTypeDTO): Promise<boolean> {
        return await this.hallTypesService.AddHallType(addHallTypeDTO);
    }

    @HttpCode(200)
    @Delete()
    @UsePipes(ValidationPipe)
    public async RemoveHallType(@Body() removeHallTypeDTO: RemoveHallTypeDTO): Promise<boolean> {
        return await this.hallTypesService.RemoveHallType(removeHallTypeDTO);
    }
}