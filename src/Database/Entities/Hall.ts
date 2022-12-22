import {BaseEntity, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {HallName} from "./HallName";
import {HallType} from "./HallType";
import {Lesson} from "./Lesson";
import {Department} from "./Department";

@Entity("halls")
export class Hall extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => HallName,  h => h.halls, {nullable: false})
    hallName: HallName;

    @ManyToOne(() => HallType,  h => h.halls, {nullable: false})
    hallType: HallType;

    @ManyToOne(() => Department, d => d.halls, {nullable: false})
    department: Department;

    @OneToMany(() => Lesson, l => l.hall)
    lessons: Lesson[];
}