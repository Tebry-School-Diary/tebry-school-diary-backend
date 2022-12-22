import {BaseEntity, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {HallName} from "./HallName";
import {HallType} from "./HallType";
import {Lesson} from "./Lesson";

@Entity("halls")
export class Hall extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => HallName,  h => h.halls)
    hallName: HallName;

    @ManyToOne(() => HallType,  h => h.halls)
    hallType: HallType;

    @OneToMany(() => Lesson, l => l.hall)
    lessons: Lesson[];
}