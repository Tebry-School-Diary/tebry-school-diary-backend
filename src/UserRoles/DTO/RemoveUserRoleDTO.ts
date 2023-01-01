import {IsNumber, Max, Min} from "class-validator";

export class RemoveUserRoleDTO{
    @IsNumber()
    @Max(9999, {message: "department id is too big"})
    @Min(1, {message: "department id is too small"})
    public roleId: number;
}