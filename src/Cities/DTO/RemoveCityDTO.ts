import {IsNumber, Max, Min} from "class-validator";

export class RemoveCityDTO{
    @IsNumber()
    @Max(9999, {message: "city id is too big"})
    @Min(1, {message: "city id is too small"})
    public cityId: number;
}