import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Department} from "./Department";

@Entity("cities")
export class City extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    city: string;

    @OneToMany(() => Department, d => d.city)
    departments: Department[];
}