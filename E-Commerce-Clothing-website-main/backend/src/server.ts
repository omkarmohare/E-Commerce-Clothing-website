import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import itemRouter from './routers/item.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/items", itemRouter);
app.use("/api/users", userRouter);

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})