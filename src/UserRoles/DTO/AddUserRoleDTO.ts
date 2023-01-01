import {IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class AddUserRoleDTO {
    @IsString({message: "is must to be a string"})
    @IsNotEmpty({message: "string cant be empty"})
    @MaxLength(75, {message: "that value its too long to be a user role"})
    @MinLength(1, {message: "that value its too short to be a user role"})
    public role: string;
}