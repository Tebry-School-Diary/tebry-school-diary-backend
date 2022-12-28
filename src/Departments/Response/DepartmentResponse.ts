import {DepartmentNameResponse} from "../../DepartmentNames/Response/DepartmentNameResponse";
import {CityResponse} from "../../Cities/Response/CityResponse";

export class DepartmentResponse {
    public readonly departmentId: number;
    public readonly departmentName: DepartmentNameResponse;
    public readonly departmentCity: CityResponse;
    public readonly departmentAddress: string;


    constructor(departmentId: number, departmentName: DepartmentNameResponse, departmentCity: CityResponse, departmentAddress: string) {
        this.departmentId = departmentId;
        this.departmentName = departmentName;
        this.departmentCity = departmentCity;
        this.departmentAddress = departmentAddress;
    }
}