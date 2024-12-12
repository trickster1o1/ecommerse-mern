import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import movieRoutes from './routes/movie.route.js';
import categoryRoutes from './routes/category.route.js';
import path from 'path';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cors());
app.use("/api/movies", movieRoutes);
app.use("/api/category",categoryRoutes);
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "/stream-app/out")));

    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, "stream-app", "out", "index.html"));
    })
}

app.listen(port, ()=> {
    connectDB();
    console.log(`Server Running: (${port})`);
});
