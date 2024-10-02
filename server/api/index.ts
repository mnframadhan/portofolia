import { app } from "./application/app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is starting on PORT ${PORT}`);
});