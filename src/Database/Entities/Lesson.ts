import {BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {LessonTime} from "./LessonTime";
import {User} from "./User";
import {LessonName} from "./LessonName";

@Entity("lessons")
export class Lesson extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => LessonName, l => l.lessons, {nullable: false})
    lessonName: LessonName;

    @ManyToOne(() => LessonTime, l => l.lessons, {nullable: false})
    lessonTime: LessonTime;

    @ManyToOne(() => User, u => u.lessons, {nullable: false})
    teacher: User;
}