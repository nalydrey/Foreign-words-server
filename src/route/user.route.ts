import {Router} from 'express'
import { createUser, deleteAllUsers, deleteUser, enterUser, getUsers, getUser } from '../controller/users.controller'

const route = Router()

route.get('/', getUsers)
route.get('/login', enterUser)
route.get('/user/:id', getUser)
route.post('/', createUser)
route.delete('/:id', deleteUser)
route.delete('/', deleteAllUsers)

 
export default route 