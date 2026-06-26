import e from "express";
import { userValidationSchema , updateUserValidationSchema } from "../../validationsSchema/user.validation.js";


export function validateCreateUserRequest(req, res, next) {
    const { error } = userValidationSchema.safeParse(req.body);
    if (error) {
        return res.status(400).json({
            
            error: error.flatten().fieldErrors
        })
    }
    next();
}

export function validateUpdateUserRequest(req, res, next) {
    const { error } = updateUserValidationSchema.safeParse(req.body);
    if (error) {
        return res.status(400).json({
          
            error: error.flatten().fieldErrors
        })
    }
    next();
}
