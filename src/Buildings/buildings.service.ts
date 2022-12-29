import {Injectable} from "@nestjs/common";
import {BuildingResponse} from "./Response/BuildingResponse";
import {BuildingsRepo} from "../Database/DatabaseRepositories";
import {AddBuildingDTO} from "./DTO/AddBuildingDTO";
import {RemoveBuildingDTO} from "./DTO/RemoveBuildingDTO";

@Injectable()
export class BuildingsService {
    public async GetAllBuildings(): Promise<Array<BuildingResponse> | never> {
        try {
            const arr = new Array<BuildingResponse>();

            const buildings = await BuildingsRepo.find();

            buildings.forEach(b => arr.push(new BuildingResponse(b.id, b.prefix, b.buildingAddress)))

            return arr;
        }catch (e: any) {
            throw new Error(e);
        }
    }

    public async AddBuilding(addBuildingDTO: AddBuildingDTO): Promise<boolean> {
        try {
            const departments = [];

            addBuildingDTO.departmentsId.forEach(d => departments.push({id: d}))

            const building = BuildingsRepo.create({
                prefix: addBuildingDTO.prefix,
                buildingAddress: addBuildingDTO.buildingAddress,
                departments: departments
            });

            await building.save();

            return true;
        }catch{
            return false;
        }
    }

    public async RemoveBuilding(removeBuildingDTO: RemoveBuildingDTO): Promise<boolean> {
        try {
            const building = await BuildingsRepo.findOneOrFail({
                where: {
                    id: removeBuildingDTO.buildingId
                }
            });

            await building.remove();

            return true;
        }catch{
            return false;
        }
    }
}