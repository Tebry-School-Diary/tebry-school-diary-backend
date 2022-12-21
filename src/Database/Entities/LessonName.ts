import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Lesson} from "./Lesson";
import {Homework} from "./Homework";
import {Event} from "./Event";

@Entity("lessonNames")
export class LessonName extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    lessonName: string;

    @OneToMany(() => Lesson, l => l.lessonName)
    lessons: Lesson[];

    @OneToMany(() => Homework, h => h.lessonName)
    homeworks: Homework[];

    @OneToMany(() => Event, e => e.lessonName)
    events: Event[];
}