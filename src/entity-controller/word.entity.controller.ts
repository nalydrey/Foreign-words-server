import { myDataSource } from "../app-data-source";
import { Word } from "../entity/words.entity";




export const wordRepo = myDataSource.getRepository(Word)

