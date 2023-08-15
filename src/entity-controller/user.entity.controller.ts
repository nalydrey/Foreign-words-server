import { myDataSource } from "../app-data-source";
import { User } from "../entity/user.entity";




export const userRepo = myDataSource.getRepository(User)



