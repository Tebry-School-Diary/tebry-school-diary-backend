import {IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class AddDepartmentNameDTO{
    @IsString({message: "is must to be a string"})
    @IsNotEmpty({message: "string cant be empty"})
    @MaxLength(75, {message: "that value its too long to be a department name"})
    @MinLength(1, {message: "that value its too short to be a department name"})
    public name: string;
}