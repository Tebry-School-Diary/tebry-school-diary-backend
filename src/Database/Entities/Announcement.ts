import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity("announcements")
export class Announcement extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    title: string;

    @Column({
        nullable: false,
        type: "longtext"
    })
    content: string;


    @Column({
        nullable: false
    })
    date: string;

    @ManyToOne(() => User, u => u.announcements, {nullable: false})
    author: User;
}