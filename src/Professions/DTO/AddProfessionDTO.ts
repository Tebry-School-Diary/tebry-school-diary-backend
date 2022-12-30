import {IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class AddProfessionDTO{
    @IsString({message: "is must to be a string"})
    @IsNotEmpty({message: "string cant be empty"})
    @MaxLength(75, {message: "that value its too long to be a profession"})
    @MinLength(1, {message: "that value its too short to be a profession"})
    public profession: string;
}