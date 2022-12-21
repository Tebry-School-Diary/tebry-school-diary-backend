import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Class} from "./Class";
import {LessonName} from "./LessonName";

@Entity("homeworks")
export class Homework extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    date: string;

    @Column({
        nullable: false
    })
    whenAdd: string;

    @Column({
        nullable: false
    })
    task: string;

    @ManyToOne(() => LessonName, l => l.homeworks, {nullable: false})
    lessonName: LessonName;

    @ManyToOne(() => Class, c => c.homeworks, {nullable: false})
    class: Class;
}