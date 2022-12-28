import {IsNumber, Max, Min} from "class-validator";

export class RemoveDepartmentNameDTO {
    @IsNumber()
    @Max(9999, {message: "department name id is too big"})
    @Min(1, {message: "department name id is too small"})
    public departmentNameId: number;
}