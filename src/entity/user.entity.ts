import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from "typeorm"
import { Word } from "./words.entity"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nikName: string 

    @Column()
    email: string 
    
    @Column()
    password: string 

    @OneToMany(()=> Word, (word) => word.user)
    words: Word[]
}