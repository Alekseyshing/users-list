import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5001;

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Vite dev server port
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Логирование всех входящих запросов
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Request body:', req.body);
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Подключаемся к базе данных
connectDB().then(() => {
  app.listen(PORT, 'localhost', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}); 