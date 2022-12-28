import {Injectable} from "@nestjs/common";
import {DepartmentNameResponse} from "./Response/DepartmentNameResponse";
import {DepartmentNamesRepo} from "../Database/DatabaseRepositories";
import {AddDepartmentNameDTO} from "./DTO/AddDepartmentNameDTO";
import {RemoveDepartmentNameDTO} from "./DTO/RemoveDepartmentNameDTO";

@Injectable()
export class DepartmentNamesService {
    public async GetAllDepartmentsName(): Promise<Array<DepartmentNameResponse> | never> {
        try {
            const arr = new Array<DepartmentNameResponse>();

            const departmentNames = await DepartmentNamesRepo.find()

            departmentNames.forEach(d => arr.push(new DepartmentNameResponse(d.id, d.name)))

            return arr;
        }catch(e: any) {
            throw new Error(e);
        }
    }

    public async AddDepartmentName(addDepartmentNameDTO: AddDepartmentNameDTO): Promise<boolean> {
        try {
            const departmentName = DepartmentNamesRepo.create({
                name: addDepartmentNameDTO.name
            });

            await departmentName.save();

            return true;
        }catch {
            return false;
        }
    }

    public async RemoveDepartmentName(removeDepartmentNameDTO: RemoveDepartmentNameDTO): Promise<boolean> {
        try {
            const departmentName = await DepartmentNamesRepo.findOneOrFail({
                where: {
                    id: removeDepartmentNameDTO.departmentNameId
                }
            });

            await departmentName.remove();

            return true;
        }catch {
            return false;
        }
    }
}