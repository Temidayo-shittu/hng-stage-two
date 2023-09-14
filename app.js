require('dotenv').config()
require('express-async-errors')
//express
const express = require('express')
const app = express()
//database
const connectDB = require('./db/connect')
//routes
const userRouter = require('./routes/userRoutes')
//Middleware
const notFoundMiddleware= require('./middleware/not-found')
const errorHandlerMiddleware= require('./middleware/error-handler')

app.use(express.json());

app.get('/api',(req,res)=>{
    res.send('USER RESOURCE SYSTEM RUNNING')
})

app.use('/api',userRouter)

const port= process.env.PORT || 5000

const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()