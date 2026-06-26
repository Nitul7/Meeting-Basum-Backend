import redis from "../config/redis";

export const setCache = async (key, value, ttl = 3600) => {
        await redis.set(key, value, 'EX', ttl);
    }

export const getCache = async (key) => {
    return await redis.get(key);
}

export const deleteCache = async (key) => {
    await redis.del(key);
}


