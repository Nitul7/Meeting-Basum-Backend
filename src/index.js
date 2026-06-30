import express from 'express';
import dotenv from 'dotenv';
import userRouter from './controllers/user.controller.js';
import meetingRouter from './controllers/meeting.controller.js';
import profileRouter from './controllers/profile.controller.js';
import authenticate from './middlewares/auth.middleware.js';
import authController from './controllers/auth.controller.js';
import cors from 'cors';
import { AccessToken } from 'livekit-server-sdk';

dotenv.config();

const app = express();

console.info("Starting server");

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
app.post('/livekit/token', async (req, res) => {

    const { roomName, userName } = req.body;

    const accessToken = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, {
        identity: userName,
        room: roomName,
        ttl: 3600
    });

    console.log("accessToken: ", accessToken);


    accessToken.addGrant({
        roomJoin: true,
        room: roomName,
    });

    const token = await accessToken.toJwt();

    console.log("token: ", token);

    res.json({
        token
    })
});


app.post('/livekit/token', async (req, res) => {

    const { roomName, userName } = req.body;

    const accessToken = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, {
        identity: userName,
        room: roomName,
        ttl: 3600
    });

    console.log("accessToken: ", accessToken);


    accessToken.addGrant({
        roomJoin: true,
        room: roomName,
    });

    const token = await accessToken.toJwt();

    console.log("token: ", token);

    res.json({
        token
    })
});


console.info("Routes defined");
app.use('/users', authenticate, userRouter);
app.use('/meetings', authenticate, meetingRouter);
app.use('/auth', authController);
app.use('/profiles', authenticate, profileRouter);

console.info("Server started");

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});