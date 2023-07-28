import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Word } from "./words.entity"


@Entity()
export class Metadata {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        default: 0
    })
    showCounter: number

    @Column({
        default: 0
    })
    properlyCounter: number

    @Column({
        default: null
    })
    category: string | null

    @OneToOne(type => Word, word => word.meta, {onDelete: "CASCADE"})
    @JoinColumn()
    word: Word
}