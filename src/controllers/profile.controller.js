import express from 'express';
import { validateCreateProfileRequest, validateUpdateProfileRequest } from '../middlewares/validators/profile.schema.validators.js';
import createProfile from '../service/profile.service.js';

const profileRouter = express.Router();

profileRouter.post('/', validateCreateProfileRequest, async (req, res) => {
    try {
        const profile = await createProfile(req.body);
        res.json({
            message: 'Profile created successfully',
            data: profile
        })
    }
    catch (error) {
        res.status(500).json({
            message: 'Error creating profile',
            error: error.message
        })
    }
});

profileRouter.patch('/:id', validateUpdateProfileRequest, async (req, res) => {
    try {
        const profile = await updateProfile(req.params.id, req.body);
        res.json({
            message: 'Profile updated successfully',
            data: profile
        })
    }
    catch (error) {
        res.status(500).json({
            message: 'Error updating profile',
            error: error.message
        })
    }
});

export default profileRouter;