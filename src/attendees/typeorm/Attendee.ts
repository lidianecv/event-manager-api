import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Attendee {
    @PrimaryGeneratedColumn()
    id :number
     
    @Column()
userId :string; // (FK → User)

 @Column()
eventId :string //(FK → Event)

 @Column()
status:string; // ('going' | 'interested' | 'declined')

 @CreateDateColumn()
createdAt :number;
}