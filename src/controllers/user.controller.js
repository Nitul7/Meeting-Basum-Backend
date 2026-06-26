import express from 'express';
import { validateCreateUserRequest, validateUpdateUserRequest } from '../middlewares/validators/user.schema.validators.js';
import { getUsers , createUser ,getUserById , updateUser , deleteUser } from '../service/user.service.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    try {
        const users = await getUsers();
        res.json({
            message: 'Users retrieved successfully',
            data: users
        })
    }
    catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
});

userRouter.get('/:id', async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        res.json({
            message: 'User retrieved successfully',
            data: user
        })
    }
    catch (error) {
        res.status(500).json({
            message: 'Error retrieving user',
            error: error.message
        })
    }
});


userRouter.post('/', validateCreateUserRequest, async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.json({
            message: 'User created successfully',
            data: user
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                message: 'Email already exists'
            })
        }
    }
});

//PUT -> update the entire user document, if any field is missing in the request body, it will be set to null in the database
//PATCH -> update only the fields that are provided in the request body

userRouter.patch('/:id', validateUpdateUserRequest, async (req, res) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        res.json({
            message: 'User updated successfully',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error updating user',
            error: error.message
        })
    }
});

userRouter.delete('/:id', async (req, res) => {
    try {
        const user = await deleteUser(req.params.id);
        res.json({
            message: 'User deleted successfully',
            data: user
        })
    }
    catch (error) {
        res.status(500).json({ 
            message: 'Error deleting user',
            error: error.message
        })
    }
});

export default userRouter;