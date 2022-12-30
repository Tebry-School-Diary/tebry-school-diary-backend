import {Body, Controller, Delete, Get, HttpCode, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {ProfessionsService} from "./professions.service";
import {ProfessionResponse} from "./Response/ProfessionResponse";
import {AddProfessionDTO} from "./DTO/AddProfessionDTO";
import {RemoveProfessionDTO} from "./DTO/RemoveProfessionDTO";

@Controller("/profession")
export class ProfessionsController {
    private readonly professionsService: ProfessionsService;

    constructor(professionsService: ProfessionsService) {
        this.professionsService = professionsService;
    }

    @HttpCode(200)
    @Get()
    public async GetAllProfession(): Promise<Array<ProfessionResponse> | never> {
        return await this.professionsService.GetAllProfession();
    }

    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    public async AddProfession(@Body() addProfessionDTO: AddProfessionDTO): Promise<boolean> {
        return await this.professionsService.AddProfession(addProfessionDTO);
    }

    @HttpCode(200)
    @Delete()
    @UsePipes(ValidationPipe)
    public async RemoveProfession(@Body() removeProfessionDTO: RemoveProfessionDTO): Promise<boolean> {
        return await this.professionsService.RemoveProfession(removeProfessionDTO);
    }
}