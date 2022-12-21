import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Class} from "./Class";

@Entity("classNames")
export class ClassName extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    name: string;

    @OneToMany(() => Class, c => c.className)
    class: Class;
}