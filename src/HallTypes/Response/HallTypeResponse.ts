export class HallTypeResponse {
    public readonly hallTypeId: number;
    public readonly type: string;

    constructor(hallTypeId: number, type: string) {
        this.hallTypeId = hallTypeId;
        this.type = type;
    }
}