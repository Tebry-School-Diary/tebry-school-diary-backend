import {IsNumber, Max, Min} from "class-validator";

export class RemoveHallTypeDTO {
    @IsNumber()
    @Max(9999, {message: "hall type id is too big"})
    @Min(1, {message: "hall type id is too small"})
    public hallTypeId: number;
}