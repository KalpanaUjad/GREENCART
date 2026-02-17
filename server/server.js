import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';

const app = express();
const port = process.env.PORT || 4000;

// mongodb called
await connectDB();

// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({
   origin: "http://localhost:5173", 
   credentials:true
}))

app.get('/', (req,res) => {
   res.send("app is working");
})

app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);


app.listen(port, () => {
   console.log(`server is running on http://localhost:${port}`)
})