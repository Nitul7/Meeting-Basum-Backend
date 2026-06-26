import express from 'express';
import dotenv from 'dotenv';
import userRouter from './controllers/user.controller.js';
import meetingRouter from './controllers/meeting.controller.js';
import authenticate from './middlewares/auth.middleware.js';
import authController from './controllers/auth.controller.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  
  res.json({
    message: 'Hello From Server!'
  });
});

app.use('/users', authenticate, userRouter);
app.use('/meetings', authenticate, meetingRouter);
app.use('/auth', authController);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});