import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Grade} from "./Grade";

@Entity("gradeTypes")
export class GradeType extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    type: string;

    @OneToMany(() => Grade, g => g.gradeType)
    grades: Grade[];
}