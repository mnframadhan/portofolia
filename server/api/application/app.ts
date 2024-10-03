import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { db } from '../config/database';
import { testUser } from '../schema/schema';

dotenv.config();
export const app = express();
const corsOrigin = process.env.DEV_CORS_ORIGIN!;
app.use(express.json());
app.use(cors({
    origin: [corsOrigin],
    methods: ['GET', 'POST', 'PATCH'],
    allowedHeaders: ['Content-Type']
}))


app.get('/', (req, res) => {

    const response = "Hello, this is portofolia.id API"
    res.status(200);
    res.send(response);

})

app.get('/api/testusers', async (req, res) => {

    const response = await db.select().from(testUser);
    console.log(response);

    res.status(200);
    res.json(response)

})