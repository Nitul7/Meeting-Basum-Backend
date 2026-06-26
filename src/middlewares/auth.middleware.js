import { verifyAccessToken } from "../util/auth.util.js";

function authenticate(req, res, next) {
    console.info("Authenticating request");
    const token = req.headers.authorization;
    try {
        if (!token) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }
        console.info("Token found");
        const decoded = verifyAccessToken(token);
        console.info("Token verified");
        if (!decoded) {
            return res.status(401).json({
                message: 'Invalid token'
            });
        }

        req.user = decoded.user;
        console.log(req.user);
        console.info("Request authenticated successfully");
        next();
    }
    catch (error) {
        console.log("Error in authenticate middleware");
        console.log(error);
        res.status(500).json({
            message: "Error occurred while verifying token"
        });
    }
}

export default authenticate;