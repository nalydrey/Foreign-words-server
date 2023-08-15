import { DataSource } from "typeorm"
import {config} from 'dotenv'
import { User } from "./entity/user.entity"
import { Word } from "./entity/words.entity"
import { Metadata } from "./entity/metadata.entity"
import { Setting } from "./entity/settings.entity"
config()


export const myDataSource = new DataSource({
    type: "mysql", 
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username:  process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Word, Metadata, Setting], 
    logging: true,
    synchronize: true,
})