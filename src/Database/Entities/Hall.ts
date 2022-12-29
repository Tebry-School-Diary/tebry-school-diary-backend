import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {HallName} from "./HallName";
import {HallType} from "./HallType";
import {Lesson} from "./Lesson";
import {Building} from "./Building";

@Entity("halls")
export class Hall extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    seatsAmount: number;

    @ManyToOne(() => HallName,  h => h.halls, {nullable: false})
    hallName: HallName;

    @ManyToOne(() => HallType,  h => h.halls, {nullable: false})
    hallType: HallType;

    @ManyToOne(() => Building, b => b.halls, {nullable: false})
    building: Building;

    @OneToMany(() => Lesson, l => l.hall)
    lessons: Lesson[];
}