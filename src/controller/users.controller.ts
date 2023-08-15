import { Request, Response } from "express"
import { myDataSource } from "../app-data-source";
import { User } from "../entity/user.entity";
import { Setting } from "../entity/settings.entity";



export const deleteAllUsers = async(req: Request, res: Response) => {
    console.log('deleteAllUsers');
    try {
        const usersRepo = myDataSource.getRepository(User)
        const users = await usersRepo.manager.delete(User, {})
        res.send(users)
        
    } catch (error) {
        console.log('deleteAllUsers func error', error);
    }
}

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
        const { nikName, password } = req.body
        const user = new User()
        const settings = new Setting()
        user.nikName = nikName
        user.password = password
        settings.user = user
        
        const usersRepo = myDataSource.getRepository(User)
        const settingRepo = myDataSource.getRepository(Setting)
        const existedUser =await usersRepo.findOneBy({nikName})
        if(existedUser){
            return res.send({user: null})
        }
        await usersRepo.save(user)
        await settingRepo.save(settings)

        const newUser = await usersRepo.findOneBy({id: user.id})

        
        res.send({user: newUser})
        
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

export const enterUser = async (req: Request, res: Response) => {
    console.log('enterUser');
    try {
        console.log(req.query);
        const { nikName, password } = req.query
        let user = null
        const usersRepo = myDataSource.getRepository(User)
        if(typeof nikName === 'string' && typeof password === 'string' ){
            user = await usersRepo.findOneBy({nikName, password})
        }
        res.send({user})
        
    } catch (error) {
        console.log('enterUser func error ', error);
        res.send({user: null})
    }
}

export const getUser = async (req: Request, res: Response) => {
    console.log('getUser');
    try {
        const id  = +req.params.id
        let user = null
        const usersRepo = myDataSource.getRepository(User)
        user = await usersRepo.findOneBy({id})

        console.log(user);
        
        res.send({user})
        
    } catch (error) {
        console.log('getUser func error', error);
    }
}

export const changeSettings = async (req: Request, res: Response) => {
    console.log('changeSettings');
    try {
        const id = +req.params.id
        const {timer, pause, repeatBy, learnBy} = req.body
        const settingsRepo = myDataSource.getRepository(Setting)
        const setting = await settingsRepo.update(id, {timer, pause, repeatBy, learnBy})
        res.json({isUpdated: true})
    } catch (error) {
        console.log('changeSettings func error', error);
        res.json({isUpdated: false})
    }
}



