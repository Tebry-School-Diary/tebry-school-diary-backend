import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Lesson} from "./Lesson";
import {Attendance} from "./Attendance";
import {Event} from "./Event";

@Entity("lessonTimes")
export class LessonTime extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    time: string;

    @OneToMany(() => Lesson, l => l.lessonTime)
    lessons: Lesson[];

    @OneToMany(() => Attendance, a => a.lessonTime)
    attendances: Attendance[];

    @OneToMany(() => Event, e => e.lessonTime)
    events: Event[];
}