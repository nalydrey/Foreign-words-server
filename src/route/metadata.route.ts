import { Router } from "express";
import { changeMetaData, changeStatus } from "../controller/metadata.controller";

const route = Router()

route.put('/', changeMetaData)
route.put('/:id', changeStatus)

export default route