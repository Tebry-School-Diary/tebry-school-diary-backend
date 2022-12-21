import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Event} from "./Event";

@Entity("eventTypes")
export class EventType extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    type: string;

    @OneToMany(() => Event, e => e.eventType)
    events: Event[];
}