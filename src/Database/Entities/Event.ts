import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {EventType} from "./EventType";
import {LessonName} from "./LessonName";
import {LessonTime} from "./LessonTime";
import {User} from "./User";
import {Class} from "./Class";

@Entity("events")
export class Event extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    comment: string;

    @Column({
        nullable: false
    })
    date: string;

    @Column({
        nullable: false
    })
    whenAdd: string;

    @ManyToOne(() => EventType, e => e.events, {nullable: false})
    eventType: EventType;

    @ManyToOne(() => LessonName, l => l.events, {nullable: false})
    lessonName: LessonName;

    @ManyToOne(() => LessonTime, l => l.events, {nullable: false})
    lessonTime: LessonTime;

    @ManyToOne(() => User, u => u.events, {nullable: false})
    teacher: User;

    @ManyToOne(() => Class, c => c.events, {nullable: false})
    class: Class;
}