import { Response, Request } from "express"
import { myDataSource } from "../app-data-source"
import { Word } from "../entity/words.entity"
import { User } from "../entity/user.entity"
import { Metadata } from "../entity/metadata.entity"

export const createWord = async (req: Request, res: Response) => {
    console.log('createWord')
    try {
        console.log(req.body);

        const {user, foreignText, translatedText, category} = req.body

        const word = new Word()
        const metadata = new Metadata()
        metadata.category = category
        
        const usersRepo = myDataSource.getRepository(User)
        const wordsRepo = myDataSource.getRepository(Word)
        const metadataRepo = myDataSource.getRepository(Metadata)
        
        const foundUser = await usersRepo.findOneBy({id: user})

        word.foreignText = foreignText
        word.translatedText = translatedText
        word.user = foundUser
        word.meta = metadata

        await metadataRepo.save(metadata)
        await wordsRepo.save(word)

        res.send(req.body)
        
    } catch (error) {
        console.log('createWord func error!', error)
    }
}

export const editWord = async (req: Request, res: Response) => {
    console.log('editWord')
    try {
       const id = +req.params.id
       const {foreignText, translatedText} = req.body
 
       const wordsRepo = myDataSource.getRepository(Word)
       const word = await wordsRepo.findOneBy({id})
       word.foreignText = foreignText || word.foreignText
       word.translatedText = translatedText || word.translatedText

       await wordsRepo.save(word)

        res.send(word)
        
    } catch (error) {
        console.log('editWord func error!', error)
    }
}

export const getWords = async (req: Request, res: Response) => {
    console.log('getWords')
    try {
        const wordsRepo = myDataSource.getRepository(Word)
        const words = await wordsRepo.find()
        res.send(words)
        
    } catch (error) {
        console.log('getWords func error', error)
    }
}

export const deleteWord = async (req: Request, res: Response) => {
    console.log('deleteWord')
    try {
        const id = +req.params.id
        console.log(id);
        
        const wordsRepo = myDataSource.getRepository(Word)
        const word = await wordsRepo.findOneBy({id})
        wordsRepo.remove(word)
        res.send(word)
        
    } catch (error) {
        console.log('deleteWord func error', error)
    }
}