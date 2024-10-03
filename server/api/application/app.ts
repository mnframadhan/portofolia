import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { UserController } from '../controllers/user-controller';
import { errorMiddleware } from '../middleware/error-middleware';
import { authMiddleware } from '../middleware/auth/auth-middleware';
import { authRateLimit, generalRateLimit } from '../config/rate-limiter';

dotenv.config();
export const app = express();
const corsOrigin = process.env.DEV_CORS_ORIGIN!;
app.use(express.json());
app.use(generalRateLimit);
app.use(cors({
    origin: [corsOrigin],
    methods: ['GET', 'POST', 'PATCH'],
    allowedHeaders: ['Content-Type', 'X-API-TOKEN']
}))


app.get('/', (req, res) => {

    const response = "Hello, this is portofolia.id API"
    res.status(200);
    res.send(response);

})

// USER PUBLIC API
app.post('/api/users/registration', UserController.registerUser);
app.post('/api/users/login', UserController.loginUser);

// USER PROTECTED API
app.get('/api/users/current', authRateLimit, authMiddleware, UserController.getCurrentUser);


// Error Middleware
app.use(errorMiddleware);