import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Lesson} from "./Lesson";
import {Homework} from "./Homework";
import {Event} from "./Event";
import {Grade} from "./Grade";

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

    @OneToMany(() => Grade, g => g.lessonName)
    grades: Grade[];
}