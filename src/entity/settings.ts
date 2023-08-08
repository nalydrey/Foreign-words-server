import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { User } from './user.entity'


@Entity()
export class Setting {
    @PrimaryGeneratedColumn()
    id: number

    @Column({default: true})
    timer: boolean

    @Column({default: 4})
    pause: number

    @Column({default: 20})
    lastWords: number

    @OneToOne(type => User, user => user.settings, {onDelete: 'CASCADE'})
    @JoinColumn()
    user: User
}