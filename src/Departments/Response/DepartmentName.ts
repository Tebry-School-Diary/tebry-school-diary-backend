export class DepartmentName{
    public readonly departmentNameId: number;
    public readonly name: string;


    constructor(departmentNameId: number, name: string) {
        this.departmentNameId = departmentNameId;
        this.name = name;
    }
}