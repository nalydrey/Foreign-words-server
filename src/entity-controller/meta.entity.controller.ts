import { myDataSource } from "../app-data-source";
import { Metadata } from "../entity/metadata.entity";

type MetadataFields = keyof Metadata


export const metaRepo = myDataSource.getRepository(Metadata).extend({
    async uniqueArrFromField(col:  MetadataFields) {
        const uniqueArr: any[] = await this.query(`SELECT DISTINCT ${col} FROM metadata`)
        return uniqueArr.map(item => item[col])
    }
}) 