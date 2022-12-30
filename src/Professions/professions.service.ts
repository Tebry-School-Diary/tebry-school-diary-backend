import {ProfessionResponse} from "./Response/ProfessionResponse";
import {ProfessionsRepo} from "../Database/DatabaseRepositories";
import {AddProfessionDTO} from "./DTO/AddProfessionDTO";
import {RemoveProfessionDTO} from "./DTO/RemoveProfessionDTO";

export class ProfessionsService {
    public async GetAllProfession(): Promise<Array<ProfessionResponse> | never> {
        try{
            const arr = new Array<ProfessionResponse>();

            const professions = await ProfessionsRepo.find();

            professions.forEach(p => arr.push(new ProfessionResponse(p.id, p.profession)));

            return arr;
        }catch(e: any){
            throw new Error(e);
        }
    }

    public async AddProfession(addProfessionDTO: AddProfessionDTO): Promise<boolean> {
        try{
            const profession = ProfessionsRepo.create({
                profession: addProfessionDTO.profession
            });

            await profession.save();

            return true;
        }catch{
            return false;
        }
    }

    public async RemoveProfession(removeProfessionDTO: RemoveProfessionDTO): Promise<boolean> {
        try{
            const profession = await ProfessionsRepo.findOneOrFail({
                where: {
                    id: removeProfessionDTO.professionId
                }
            });

            await profession.remove();

            return true;
        }catch{
            return false;
        }
    }
}