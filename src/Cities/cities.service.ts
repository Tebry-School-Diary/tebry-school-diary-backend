import {Injectable} from "@nestjs/common";
import {CityResponse} from "./Response/CityResponse";
import {CityRepo} from "../Database/DatabaseRepositories";
import {AddCityDTO} from "./DTO/AddCityDTO";
import {RemoveCityDTO} from "./DTO/RemoveCityDTO";

@Injectable()
export class CitiesService{
    public async GetAllCities(): Promise<Array<CityResponse> | never>{
        try{
            const arr = new Array<CityResponse>();

            const cities = await CityRepo.find();

            cities.forEach(c => arr.push(new CityResponse(c.id, c.city)))

            return arr;
        }catch (e: any){
            throw new Error(e);
        }
    }

    public async AddCity(addCityDTO: AddCityDTO): Promise<boolean>{
        try {
            const city = CityRepo.create({
                city: addCityDTO.cityName,
            });

            await city.save();

            return true;
        }catch{
            return false;
        }
    }

    public async RemoveCity(removeCityDTO: RemoveCityDTO): Promise<boolean>{
        try{
            const city = await CityRepo.findOneOrFail({
                where: {
                    id: removeCityDTO.cityId
                }
            })

            await city.remove()

            return true;
        }catch{
            return false;
        }
    }
}