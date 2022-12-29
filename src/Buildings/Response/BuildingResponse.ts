export class BuildingResponse {
    public readonly buildingId: number;
    public readonly buildingPrefix: string;
    public readonly buildingAddress: string;

    constructor(buildingId: number, buildingPrefix: string, buildingAddress: string) {
        this.obuildingId = obuildingId;
        this.buildingPrefix = buildingPrefix;
        this.buildingAddress = buildingAddress;
    }
}