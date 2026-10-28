import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from './routes/auth.routes.js';
import fileRoutes from "./routes/file.routes.js";
import mailRoutes from  "./routes/mail.routes.js"

const app = express();

const PORT = 5000

app.use(express.json())
//mounting


app.use('/api/auth',authRoutes)
app.use('/api/files',fileRoutes)
app.use('/api/mails',mailRoutes)




connectDB()

app.get('/', (req, res) => { 
    res.send(' Codemailer API is Running');
})
app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}`)
    })