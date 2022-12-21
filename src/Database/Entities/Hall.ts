import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("halls")
export class Hall extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
}