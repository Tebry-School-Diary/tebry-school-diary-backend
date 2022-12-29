import {Injectable} from "@nestjs/common";
import {HallTypesRepo} from "../Database/DatabaseRepositories";
import {HallTypeResponse} from "./Response/HallTypeResponse";
import {AddHallTypeDTO} from "./DTO/AddHallTypeDTO";
import {RemoveHallTypeDTO} from "./DTO/RemoveHallTypeDTO";

@Injectable()
export class HallTypesService {
    public async GetAllHallTypes(): Promise<Array<HallTypeResponse> | never> {
        try{
            const arr = new Array<HallTypeResponse>();

            const hallTypes = await HallTypesRepo.find();

            hallTypes.forEach(h => arr.push(new HallTypeResponse(h.id, h.type)));

            return arr;
        }catch(e: any){
            throw new Error(e);
        }
    }

    public async AddHallType(addHallTypeDTO: AddHallTypeDTO): Promise<boolean> {
        try{
            const hallType = HallTypesRepo.create({
                type: addHallTypeDTO.type
            });

            await hallType.save();

            return true;
        }catch{
            return false;
        }
    }

    public async RemoveHallType(removeHallTypeDTO: RemoveHallTypeDTO): Promise<boolean> {
        try{
            const hallType = await HallTypesRepo.findOneOrFail({
                where: {
                    id: removeHallTypeDTO.hallTypeId
                }
            });

            await hallType.remove();

            return true;
        }catch{
            return false;
        }
    }
}