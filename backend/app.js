import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

// import router
import { indexRouter } from "./src/routes/index.js";
import { authRouter } from "./src/routes/auth.js"


dotenv.config()

const app = express()

// database config
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));


// dependencies
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


// endpoint
app.use('/', indexRouter)
app.use('/auth', authRouter)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`your app running on port ${port}`)
})
