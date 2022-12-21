import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity("messages")
export class Message extends BaseEntity{
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

    @ManyToOne(() => User, u => u.sentMessages, {nullable: false})
    author: User;

    @ManyToOne(() => User, u => u.receivedMessages, {nullable: false})
    receiver: User;
}