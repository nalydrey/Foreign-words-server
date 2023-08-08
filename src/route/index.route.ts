import { Router } from "express"
import userRoute from './user.route'
import wordRoute from './word.route'
import metaRoute from './metadata.route'

const route = Router()

route.use('/users', userRoute )
route.use('/words', wordRoute )
route.use('/meta', metaRoute )


export default route
