import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {AttendanceType} from "./AttendanceType";
import {LessonTime} from "./LessonTime";
import {User} from "./User";
import {Department} from "./Department";

@Entity("attendances")
export class Attendance extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    attendanceDate: string;

    @ManyToOne(() => AttendanceType, a => a.attendances, {nullable: false})
    attendanceType: AttendanceType;

    @ManyToOne(() => User, u => u.attendances, {nullable: false})
    student: User;

    @ManyToOne(() => User, u => u.attendances, {nullable: false})
    whoAdd: User;

    @ManyToOne(() => LessonTime, l => l.attendances, {nullable: false})
    lessonTime: LessonTime;
}