import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
const saltRounds = 10;

export function hashPassword(password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export function comparePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}

export const generateAccessToken = (user) => {
    return jwt.sign({ user}, process.env.jwt_secret, { expiresIn: '10m' });
}

export const generateRefreshToken = (user) => {
    return jwt.sign({ user }, process.env.jwt_secret, { expiresIn: '30d' });
}

export const verifyAccessToken = (token) => {
        return jwt.verify(token, process.env.jwt_secret);
}

export const verifyRefreshToken = (token) => {
    return jwt.verify(token, process.env.jwt_secret);
}