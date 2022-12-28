import {IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength} from "class-validator";

export class AddDepartmentDTO{
    @IsNumber()
    @Max(9999, {message: "department name id is too big"})
    @Min(1, {message: "department name id is too small"})
    public departmentNameId: number;

    @IsNumber()
    @Max(9999, {message: "city id is too big"})
    @Min(1, {message: "city id is too small"})
    public cityId: number;

    @IsString({message: "is must to be a string"})
    @IsNotEmpty({message: "string cant be empty"})
    @MaxLength(75, {message: "that value its too long to be a address"})
    @MinLength(1, {message: "that value its too short to be a address"})
    public address: string;
}