import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity("userRoles")
export class UserRole extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    role: string;

    @OneToMany(() => User, u => u.role)
    users: User[];
}