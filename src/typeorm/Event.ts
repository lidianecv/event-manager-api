import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
id :number;

@Column()
title :string;

@Column()
description:string;

@Column()
location :string;

@Column()
date:number;

@Column()
isPublic :boolean;

  @Column()
createdBy :number

  @CreateDateColumn()
createdAt : number;
}




