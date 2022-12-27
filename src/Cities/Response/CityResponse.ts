export class CityResponse{
    public readonly cityId: number;
    public readonly cityName: string;


    constructor(cityId: number, cityName: string) {
        this.cityId = cityId;
        this.cityName = cityName;
    }
}