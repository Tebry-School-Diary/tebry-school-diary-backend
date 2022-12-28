import {Injectable} from "@nestjs/common";
import {DepartmentResponse} from "./Response/DepartmentResponse";
import {DepartmentRepo} from "../Database/DatabaseRepositories";
import {DepartmentName} from "./Response/DepartmentName";
import {CityResponse} from "../Cities/Response/CityResponse";
import {AddDepartmentDTO} from "./DTO/AddDepartmentDTO";
import {RemoveDepartmentDTO} from "./DTO/RemoveDepartmentDTO";

@Injectable()
export class DepartmentsService{
    public async GetAllDepartments(): Promise<Array<DepartmentResponse> | never>{
        try{
            const arr = new Array<DepartmentResponse>();

            const departments = await DepartmentRepo.find({
                relations: {
                    departmentName: true,
                    city: true
                }
            });

            departments.forEach(d => arr.push(new DepartmentResponse(d.id, new DepartmentName(d.departmentName.id, d.departmentName.name),
                new CityResponse(d.city.id, d.city.city), d.address)));

            return arr;
        }catch(e: any){
            throw new Error(e);
        }
    }

    public async AddDepartment(addDepartmentDTO: AddDepartmentDTO): Promise<boolean>{
        try{
            const department = DepartmentRepo.create({
                address: addDepartmentDTO.address,
                city: {
                    id: addDepartmentDTO.cityId
                },
                departmentName: {
                    id: addDepartmentDTO.departmentNameId
                }
            });

            await department.save();

            return true;
        }catch{
            return false;
        }
    }

    public async RemoveDepartment(removeDepartmentDTO: RemoveDepartmentDTO): Promise<boolean> {
        try{
            const department = await DepartmentRepo.findOneOrFail({
                where: {
                    id: removeDepartmentDTO.departmentId
                }
            });

            await department.remove();

            return true;
        }catch{
            return false;
        }
    }
}