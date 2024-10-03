import dotenv from 'dotenv';
import { app } from "./application/app";
dotenv.config();

const PORT = process.env.PORT || 3000;
const corsOrigin = process.env.DEV_CORS_ORIGIN!

app.listen(PORT, () => {
    console.log(`Server is starting on PORT ${PORT}`);
});