import {Router} from 'express'
import { createUser, deleteUser, getUsers } from '../controller/users.controller'

const route = Router()

route.get('/', getUsers)
route.post('/', createUser)
route.delete('/:id', deleteUser)
 
export default route 