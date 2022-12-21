import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {GradeType} from "./GradeType";
import {GradeColor} from "./GradeColor";
import {Lesson} from "./Lesson";
import {User} from "./User";

@Entity("grades")
export class Grade extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    grade: number;

    @Column({
        nullable: false
    })
    date: string;

    @Column({
        nullable: false
    })
    scales: number;

    @Column({
        nullable: false
    })
    comment: string;

    @Column({
        nullable: false,
        default: true
    })
    isCountedToAverage: boolean;

    @ManyToOne(() => User, u => u.grades, {nullable: false})
    student: User;

    @ManyToOne(() => GradeType, g => g.grades, {nullable: false})
    gradeType: GradeType;

    @ManyToOne(() => GradeColor, g => g.grades, {nullable: false})
    gradeColor: GradeColor;

    @ManyToOne(() => Lesson, l => l.grades, {nullable: false})
    lesson: Lesson;

    @ManyToOne(() => User, u => u.grades, {nullable: false})
    whoAdd: User;
}