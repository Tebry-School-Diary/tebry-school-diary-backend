import {Body, Controller, Delete, Get, HttpCode, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {CitiesService} from "./cities.service";
import {CityResponse} from "./Response/CityResponse";
import {AddCityDTO} from "./DTO/AddCityDTO";
import {RemoveCityDTO} from "./DTO/RemoveCityDTO";

@Controller()
export class CitiesController{
     private readonly citiesService: CitiesService;

     constructor(citiesService: CitiesService) {
         this.citiesService = citiesService;
     }

    @HttpCode(200)
    @Get("/cities")
    public async GetAllCities(): Promise<Array<CityResponse> | never> {
         return await this.citiesService.GetAllCities();
    }

    @HttpCode(201)
    @Post("/city")
    @UsePipes(ValidationPipe)
    public async AddCity(@Body() addCityDTO: AddCityDTO): Promise<boolean> {
        return await this.citiesService.AddCity(addCityDTO);
    }

    @HttpCode(200)
    @Delete("/city")
    @UsePipes(ValidationPipe)
    public async RemoveCity(@Body() removeCityDTO: RemoveCityDTO): Promise<boolean> {
        return await this.citiesService.RemoveCity(removeCityDTO)
    }
}