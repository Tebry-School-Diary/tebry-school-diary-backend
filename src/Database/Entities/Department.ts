import {BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {City} from "./City";
import {DepartmentName} from "./DepartmentName";

@Entity("departments")
export class Department extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => City, c => c.departments, {nullable: false})
    city: City;

    @ManyToOne(() => DepartmentName, d => d.departments, {nullable: false})
    departmentName: DepartmentName;
}