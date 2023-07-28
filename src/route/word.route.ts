import {Router} from "express"
import { createWord, deleteWord, editWord, getWords } from "../controller/words.controller"

const route = Router()

route.post('/', createWord)
route.get('/', getWords)
route.delete('/:id', deleteWord)
route.put('/:id', editWord)

export default route