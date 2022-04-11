import express  , {Request , Response} from "express"
import cors from "cors" 
import compression from "compression"
import helmet from "helmet"
import userRouter from "./user.routes"
import startMongoDB from "./mongoose-connection"

const app:express.Application = express() 

app.use(express.json()) 
app.use(cors()) 
app.use(compression()) 
app.use(helmet())

startMongoDB() 

app.get("/" , (
    req :Request, 
    res  :Response) => {
    res.status(200).json({
        message : "Hello, World" , 
        statusCode  :200,
        body : []
    })
})

app.use(userRouter)

app.listen(3000, () => {
    console.log("The App is running on port 3000")
})