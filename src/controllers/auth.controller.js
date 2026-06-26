import express from 'express';
import { login, register } from '../service/auth.service.js';
import { validateLoginRequest, validateRegisterRequest } from '../middlewares/validators/auth.schema.validators.js';
import { generateAccessToken, generateRefreshToken } from '../util/auth.util.js';

const authController = express.Router();

authController.post('/login', validateLoginRequest, async (req, res) => {
    const { email, password } = req.body;
    const loginResponse = await login(email, password);

    res.json({
        message: 'Login successful',
        data: loginResponse
    });
});

authController.post('/register', validateRegisterRequest, async (req, res) => {
    const { name, email, password } = req.body;
    const user = await register(name, email, password);
    res.status(201).json({
        message: 'Registration successful',
        data: user
    });
});

export default authController;