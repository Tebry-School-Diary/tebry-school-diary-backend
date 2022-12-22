import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {LessonTime} from "./LessonTime";
import {User} from "./User";
import {LessonName} from "./LessonName";
import {Hall} from "./Hall";
import {Class} from "./Class";
import {Department} from "./Department";

@Entity("lessons")
export class Lesson extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    date: string;

    @ManyToOne(() => LessonName, l => l.lessons, {nullable: false})
    lessonName: LessonName;

    @ManyToOne(() => LessonTime, l => l.lessons, {nullable: false})
    lessonTime: LessonTime;

    @ManyToOne(() => User, u => u.lessons, {nullable: false})
    teacher: User;

    @ManyToOne(() => Hall, h => h.lessons, {nullable: false})
    hall: Hall;

    @ManyToOne(() => Class, c => c.lessons, {nullable: false})
    class: Class;

    @ManyToOne(() => Department, d => d.lessons, {nullable: false})
    department: Department;
}
