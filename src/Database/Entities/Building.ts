import {BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Department} from "./Department";
import {Hall} from "./Hall";

@Entity("buildings")
export class Building extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    buildingAddress: string;

    @ManyToMany(() => Department, d => d.buildings)
    @JoinTable({name: "building_department"})
    departments: Department[];

    @OneToMany(() => Hall, h => h.building)
    halls: Hall[];
}