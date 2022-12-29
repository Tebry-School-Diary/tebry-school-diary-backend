import {IsArray, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class AddBuildingDTO {
    @IsString({message: "is must to be a string"})
    @IsNotEmpty({message: "string cant be empty"})
    @MaxLength(50, {message: "that value its too long to be a prefix"})
    @MinLength(1, {message: "that value its too short to be a city prefix"})
    public prefix: string;

    @IsString({message: "is must to be a string"})
    @IsNotEmpty({message: "string cant be empty"})
    @MaxLength(50, {message: "that value its too long to be a building address"})
    @MinLength(1, {message: "that value its too short to be a building address"})
    public buildingAddress: string;

    @IsArray({message: "its must to be array"})
    public departmentsId: Array<number>;
}