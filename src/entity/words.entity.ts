import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToOne, JoinTable, JoinColumn } from "typeorm"
import { User } from "./user.entity"
import { Metadata } from "./metadata.entity"

@Entity()
export class Word {
    @PrimaryGeneratedColumn() 
    id: number

    @Column()
    foreignText: string

    @Column()
    translatedText: string

    @OneToOne(type => Metadata, (meta) => meta.word, {eager: true})
    meta: Metadata

    @ManyToOne(()=>User, (user)=>user.words, {onDelete: "CASCADE" })
    user: User
}