import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Profession} from "./Profession";
import {User} from "./User";
import {Homework} from "./Homework";
import {ClassName} from "./ClassName";
import {Event} from "./Event";
import {Department} from "./Department";
import {Lesson} from "./Lesson";

@Entity("classes")
export class Class extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    studentsAmount: number;

    @ManyToOne(() => ClassName, c => c.class, {nullable: false})
    className: ClassName;

    @ManyToOne(() => Profession, p => p.profession, {nullable: false})
    profession: Profession;

    @ManyToOne(() => User, u => u.classes, {nullable: true})
    teacher: User;

    @ManyToOne(() => Department, d => d.classes, {nullable: false})
    department: Department;

    @OneToMany(() => User, u => u.class)
    students: User[];

    @OneToMany(() => Homework, h => h.class)
    homeworks: Homework[];

    @OneToMany(() => Event, e => e.class)
    events: Event[];

    @OneToMany(() => Lesson, l => l.class)
    lessons: Lesson[];
}