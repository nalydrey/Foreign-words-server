import express, {Request, Response} from "express"
import { myDataSource } from "./app-data-source"
import rootRoute from "./route/index.route"


const PORT = process.env.APP_PORT

const funk = () => {
    myDataSource
        .initialize()
        .then(() => {
            console.log("Data Source has been initialized!!!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization:", err)
        })
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`);
        })
}

const app = express()
app.use(express.json())
app.use('/api', rootRoute)








funk()