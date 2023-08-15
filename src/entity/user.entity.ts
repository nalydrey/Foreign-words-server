import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, OneToOne, JoinColumn } from "typeorm"
import { Word } from "./words.entity"
import { Setting } from "./settings.entity"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nikName: string 
    
    @Column({default: 'user'})
    role: 'user' | 'admin' 
    
    @Column()
    password: string 

    @OneToMany(()=> Word, (word) => word.user)
    words: Word[]
  
    @OneToOne( () => Setting, (settings)=> settings.user, {eager: true})
    settings: Setting
}