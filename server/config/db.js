import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        console.log('CONNECTING...');
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('CONNECTED');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}