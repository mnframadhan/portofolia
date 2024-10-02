import express from 'express';

export const app = express();
app.use(express.json());


app.get('/', (req, res) => {

    const response = "Hello, this is portofolia.id API"
    res.status(200);
    res.send(response);

})