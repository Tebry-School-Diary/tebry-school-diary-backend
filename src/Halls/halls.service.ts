import {Injectable} from "@nestjs/common";
import {HallResponse} from "./Response/HallResponse";
import {HallsRepo} from "../Database/DatabaseRepositories";
import {HallTypeResponse} from "../HallTypes/Response/HallTypeResponse";
import {BuildingResponse} from "../Buildings/Response/BuildingResponse";
import {AddHallDTO} from "./DTO/AddHallDTO";
import {RemoveHallDTO} from "./DTO/RemoveHallDTO";

@Injectable()
export class HallsService {
    public async GetAllHallByBuilding(buildingId: number): Promise<Array<HallResponse> | never> {
        try{
            const arr = new Array<HallResponse>();

            const halls = await HallsRepo.find({
                where: {
                    building: {
                        id: buildingId
                    }
                },
                relations: {
                    building: true,
                    hallType: true
                }
            });

            halls.forEach(h => arr.push(new HallResponse(h.id, h.seatsAmount, h.hallNumber, new HallTypeResponse(h.hallType.id, h.hallType.type),
                new BuildingResponse(h.building.id, h.building.prefix, h.building.buildingAddress))));

            return arr;
        }catch(e: any){
            throw new Error(e);
        }
    }

    public async AddHall(addHallDTO: AddHallDTO): Promise<boolean> {
        try{
            if(await this.IsHallNumberExist(addHallDTO.hallNumber, addHallDTO.buildingId)){
                return false;
            }

            const hall = HallsRepo.create({
                seatsAmount: addHallDTO.seatsAmount,
                hallNumber: addHallDTO.hallNumber,
                hallType: {
                    id: addHallDTO.hallTypeId
                },
                building: {
                    id: addHallDTO.buildingId
                }
            });

            await hall.save();

            return true;
        }catch{
            return false;
        }
    }

    public async RemoveHall(removeHallDTO: RemoveHallDTO): Promise<boolean> {
        try{
            const hall = await HallsRepo.findOneOrFail({
                where: {
                    id: removeHallDTO.hallId
                }
            });

            await hall.remove();

            return true;
        }catch{
            return false;
        }
    }

    private async IsHallNumberExist(hallNumber: number, buildingId): Promise<boolean> {
        try{
            const halls = await HallsRepo.find({
                where: {
                    building: {
                        id: buildingId
                    }
                }
            });

            let exist = false;

            halls.forEach(h => {
                if(h.hallNumber == hallNumber)
                    exist = true;
            });

            return exist;
        }catch{
            return false;
        }
    }
}