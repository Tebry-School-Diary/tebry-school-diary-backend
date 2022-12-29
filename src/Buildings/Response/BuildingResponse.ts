export class BuildingResponse {
    public readonly obuildingId: number;
    public readonly buildingPrefix: string;
    public readonly buildingAddress: string;

    constructor(obuildingId: number, buildingPrefix: string, buildingAddress: string) {
        this.obuildingId = obuildingId;
        this.buildingPrefix = buildingPrefix;
        this.buildingAddress = buildingAddress;
    }
}