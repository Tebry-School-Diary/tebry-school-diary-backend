import {BaseEntity, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {City} from "./City";
import {DepartmentName} from "./DepartmentName";
import {User} from "./User";
import {Announcement} from "./Announcement";
import {Class} from "./Class";
import {Hall} from "./Hall";
import {Lesson} from "./Lesson";

@Entity("departments")
export class Department extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => City, c => c.departments, {nullable: false})
    city: City;

    @ManyToOne(() => DepartmentName, d => d.departments, {nullable: false})
    departmentName: DepartmentName;

    @OneToMany(() => User, u => u.department)
    users: User[];

    @OneToMany(() => Announcement, a => a.department)
    announcements: Announcement[];

    @OneToMany(() => Class, c => c.department)
    classes: Class[];

    @OneToMany(() => Hall, h => h.department)
    halls: Hall[];

    @OneToMany(() => Lesson, l => l.department)
    lessons: Lesson[];
}