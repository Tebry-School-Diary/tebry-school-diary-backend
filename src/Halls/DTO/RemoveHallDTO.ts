import {IsNumber, Max, Min} from "class-validator";

export class RemoveHallDTO {
    @IsNumber()
    @Max(9999, {message: "hall id is too big"})
    @Min(1, {message: "hall id is too small"})
    public hallId: number;
}