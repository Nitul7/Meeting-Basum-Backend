import { profileValidationSchema, updateProfileValidationSchema } from '../../validationsSchema/profile.validation.js';

export function validateCreateProfileRequest(req, res, next) {
    const { error } = profileValidationSchema.safeParse(req.body);
    if (error) {
        return res.status(400).json({
            error: error.flatten().fieldErrors
        })
    }
    next();
}

export function validateUpdateProfileRequest(req, res, next) {
    const { error } = updateProfileValidationSchema.safeParse(req.body);
    if (error) {
        return res.status(400).json({
            error: error.flatten().fieldErrors
        })
    }
    next();
}