import express from 'express';
import { v4 } from 'uuid';
import { db } from '../config/database';
import { testUser } from '../schema/schema';

export const app = express();
app.use(express.json());


app.get('/', (req, res) => {

    const response = "Hello, this is portofolia.id API"
    res.status(200);
    res.send(response);

})

// test supabase on vercel
app.post('/api/test-user', async (req, res) => {

    const newUser = {
        id: v4(),
        ...req.body
    }

    await db.insert(testUser).values(newUser);

    res.status(201);
    res.json(newUser);

}) 

app.get('/api/hello', (req, res) => {

    const sayHi = "Hello, world!"
    res.status(200);
    res.json({message: sayHi});

})