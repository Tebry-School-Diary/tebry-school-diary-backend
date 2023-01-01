import {Injectable} from "@nestjs/common";
import {UserRolesResponse} from "./Response/UserRolesResponse";
import {UserRolesRepo} from "../Database/DatabaseRepositories";
import {AddUserRoleDTO} from "./DTO/AddUserRoleDTO";
import {RemoveUserRoleDTO} from "./DTO/RemoveUserRoleDTO";

@Injectable()
export class UserRolesService {
    public async GetAllRoles(): Promise<Array<UserRolesResponse> | never> {
        try{
            const arr = new Array<UserRolesResponse>();

            const roles = await UserRolesRepo.find();

            roles.forEach(r => arr.push(new UserRolesResponse(r.id, r.role)));

            return arr;
        }catch (e: any){
            throw new Error(e);
        }
    }

    public async AddUserRole(addUserRoleDTO: AddUserRoleDTO): Promise<boolean> {
        try{
            const role = UserRolesRepo.create({
                role: addUserRoleDTO.role
            })

            await role.save();

            return true;
        }catch{
            return false;
        }
    }

    public async DeleteUserRole(removeUserRoleDTO: RemoveUserRoleDTO): Promise<boolean> {
        try{
            const role = await UserRolesRepo.findOneOrFail({
                where: {
                    id: removeUserRoleDTO.roleId
                }
            });

            await role.remove();

            return true;
        }catch{
            return false;
        }
    }
}