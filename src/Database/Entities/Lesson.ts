import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {LessonTime} from "./LessonTime";
import {User} from "./User";
import {LessonName} from "./LessonName";
import {Hall} from "./Hall";

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

    @ManyToOne(() => Hall, h => h.lessons)
    hall: Hall;
}
