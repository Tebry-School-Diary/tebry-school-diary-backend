import {HallTypeResponse} from "../../HallTypes/Response/HallTypeResponse";
import {BuildingResponse} from "../../Buildings/Response/BuildingResponse";

export class HallResponse {
    public readonly hallId: number;
    public readonly hallSeatsAmount: number;
    public readonly hallNumber: number;
    public readonly hallType: HallTypeResponse;
    public readonly building: BuildingResponse;

    constructor(hallId: number, hallSeatsAmount: number, hallNumber: number, hallType: HallTypeResponse, building: BuildingResponse) {
        this.hallId = hallId;
        this.hallSeatsAmount = hallSeatsAmount;
        this.hallNumber = hallNumber;
        this.hallType = hallType;
        this.building = building;
    }
}