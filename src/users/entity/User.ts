import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn  } from "typeorm";
import { UserRole } from "../dto/user-role.enum";

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

    // ('user' | 'admin')
    @Column()
  role: UserRole;
   

    @CreateDateColumn()
    createdAt: Date;

}