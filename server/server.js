import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import path from 'path';

dotenv.config();
const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "/website/build")));

    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, "website", "build", "index.html"));
    })
}

app.listen(port, ()=> {
    connectDB();
    console.log(`Server Running: (${port})`);
});
