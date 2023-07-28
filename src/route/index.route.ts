import { Router } from "express"
import userRoute from './user.route'
import wordRoute from './word.route'

const route = Router()

route.use('/users', userRoute )
route.use('/words', wordRoute )


export default route
