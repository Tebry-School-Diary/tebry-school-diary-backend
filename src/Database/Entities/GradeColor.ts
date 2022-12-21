import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Grade} from "./Grade";

@Entity("gradeColors")
export class GradeColor extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    color: string;

    @OneToMany(() => Grade, g => g.gradeColor)
    grades: Grade[];
}