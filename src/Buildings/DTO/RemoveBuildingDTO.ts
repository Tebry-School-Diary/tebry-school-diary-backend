import {IsNumber, Max, Min} from "class-validator";

export class RemoveBuildingDTO {
    @IsNumber()
    @Max(9999, {message: "building id is too big"})
    @Min(1, {message: "building id is too small"})
    public buildingId: number;
}