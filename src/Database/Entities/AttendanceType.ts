import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Attendance} from "./Attendance";

@Entity("attendanceTypes")
export class AttendanceType extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    type: string;

    @OneToMany(() => Attendance, a => a.attendanceType)
    attendances: Attendance[];
}