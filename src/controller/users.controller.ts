import { Request, Response } from "express"
import { myDataSource } from "../app-data-source";
import { User } from "../entity/user.entity";

export const getUsers = async(req: Request, res: Response) => {
    console.log('getUsers');
    try {
        const usersRepo = myDataSource.getRepository(User)
        const users = await usersRepo.find()
        res.send(users)
        
    } catch (error) {
        console.log('getUsers func error', error);
    }
}

export const createUser = async(req: Request, res: Response) => {
    console.log('createUser');
    try {
        console.log(req.body);
        const { nikName, password, email } = req.body
        const user = new User()
        user.nikName = nikName
        user.password = password
        user.email = email
        
        const usersRepo = myDataSource.getRepository(User)
        await usersRepo.save(user)
        
        res.send(user)
        
    } catch (error) {
        console.log('createUser func error', error);
    }
}

export const deleteUser = async(req: Request, res: Response) => {
    console.log('deleteUser');
    try {
        console.log(+req.params.id);
        
        const id = +req.params.id
        
        const usersRepo = myDataSource.getRepository(User)
        const userReadyToDelete = await usersRepo.findOneBy({id})
        
        await usersRepo.remove(userReadyToDelete)
        res.send(userReadyToDelete)
        
    } catch (error) {
        console.log('deleteUser func error', error);
    }
}

