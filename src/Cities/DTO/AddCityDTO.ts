import {IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class AddCityDTO{
    @IsString({message: "is must to be a string"})
    @IsNotEmpty({message: "string cant be empty"})
    @MaxLength(50, {message: "that value its too long to be a city name"})
    @MinLength(1, {message: "that value its too short to be a city name"})
    public cityName: string;
}