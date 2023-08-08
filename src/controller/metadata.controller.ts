import { Request, Response } from "express";
import { myDataSource } from "../app-data-source";
import { Metadata } from "../entity/metadata.entity";
import { In, MoreThan } from "typeorm";


export const changeMetaData = async (req: Request, res: Response) => {
    console.log('changeMetaData');
    try {
        const {properlyMeta, wrongMeta} = req.body
        console.log(req.body);
        
        const metaRepo = myDataSource.getRepository(Metadata)
        await metaRepo.increment({id: In(properlyMeta)}, 'properlyCounter', 1)
        await metaRepo.increment({id: In([...wrongMeta, ...properlyMeta])}, 'showCounter', 1)
        wrongMeta.length &&
        await metaRepo.update(wrongMeta, {properlyCounter: 0, needsToLearn: true})

        const goodMeta = await metaRepo.findBy({
            properlyCounter: MoreThan(7)
        })
        await metaRepo.update(goodMeta.map(meta => meta.id), {needsToLearn: false, isNew: false})

        const a = await metaRepo.find()

        res.send(a)
        
    } catch (error) {
        console.log('changeMetaData error ', error);
        
    }
}

export const changeStatus = async (req: Request, res: Response) => {
    console.log('changeStatus');
    try {
        const id = +req.params.id
        const {isNew, needsToLearn} = req.body as {isNew: boolean, needsToLearn: boolean}
        console.log(req.body);
        
        const metaRepo = myDataSource.getRepository(Metadata)
            await metaRepo.update(id, {isNew, needsToLearn})

        const newMeta = await metaRepo.findOneBy({id})
        console.log({metadata: newMeta});
        

        res.json({metadata: newMeta})
        
    } catch (error) {
        console.log('changeStatus error ', error);
        
    }
}