import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserRole} from "./UserRole";
import {Grade} from "./Grade";
import {Announcement} from "./Announcement";
import {Class} from "./Class";
import {Attendance} from "./Attendance";
import {Lesson} from "./Lesson";
import {Message} from "./Message";
import {Event} from "./Event";
import {Department} from "./Department";

@Entity("users")
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    firstName: string;

    @Column({
        nullable: false
    })
    secondName: string;

    @Column({
        nullable: false
    })
    address: string;

    @Column({
        nullable: false,
        unique: true,
        type: "bigint"
    })
    pesel: number;

    @Column({
        nullable: false,
        unique: true
    })
    login: string;

    @Column({
        nullable: false,
        type: "text"
    })
    password: string;

    @Column({
        nullable: true
    })
    accessToken: string;

    @ManyToOne(() => UserRole, r => r.users, {nullable: false})
    role: UserRole;

    @ManyToOne(() => Class, c => c.students, {nullable: false})
    class: Class;

    @ManyToOne(() => Department, d => d.users)
    department: Department;

    @OneToMany(() => Grade, g => g.student)
    grades: Grade[];

    @OneToMany(() => Announcement, a => a.author)
    announcements: Announcement[];

    @OneToMany(() => Class, c => c.teacher)
    classes: Class[];

    @OneToMany(() => Attendance, a => a.student)
    attendances: Attendance[];

    @OneToMany(() => Attendance, a => a.whoAdd)
    addedAttendances: Attendance[];

    @OneToMany(() => Lesson, l => l.teacher)
    lessons: Lesson[];

    @OneToMany(() => Message, m => m.author)
    sentMessages: Message[];

    @OneToMany(() => Message, m => m.receiver)
    receivedMessages: Message[];

    @OneToMany(() => Event, e => e.teacher)
    events: Event[];
}