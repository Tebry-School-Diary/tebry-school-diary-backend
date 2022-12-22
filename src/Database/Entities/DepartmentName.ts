import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Department} from "./Department";

@Entity("departmentNames")
export class DepartmentName extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    name: string;

    @OneToMany(() => Department, d => d.departmentName)
    departments: Department[];
}