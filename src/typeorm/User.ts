import { Column, Entity, PrimaryGeneratedColumn  } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()//PASSWORD
    password: string;

    @Column()// ('user' | 'admin')
    role: string;

    @Column()
    createdAt: string;

}