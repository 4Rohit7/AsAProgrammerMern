import express from 'express';
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on : ${PORT}`);
});
