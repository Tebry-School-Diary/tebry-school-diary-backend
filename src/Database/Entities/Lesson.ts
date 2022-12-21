import {BaseEntity, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Grade} from "./Grade";
import {LessonTime} from "./LessonTime";
import {User} from "./User";
import {LessonName} from "./LessonName";

@Entity("lessons")
export class Lesson extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => LessonName, l => l.lessons)
    lessonName: LessonName;

    @ManyToOne(() => LessonTime, l => l.lessons, {nullable: false})
    lessonTime: LessonTime;

    @ManyToOne(() => User, u => u.lessons, {nullable: false})
    teacher: User;

    @OneToMany(() => Grade, g => g.lesson)
    grades: Grade[];
}