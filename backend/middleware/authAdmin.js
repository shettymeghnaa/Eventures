import jwt from "jsonwebtoken";

const authAdmin = (req, res, next) => {
    try {
        // ✅ Extract token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }

        const token = authHeader.split(" ")[1]; // Get actual token

        // ✅ Verify token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // ✅ Check if the token belongs to the admin
        if (token_decode.email !== process.env.ADMIN_EMAIL || token_decode.role !== "admin") {
            return res.status(403).json({ success: false, message: "Forbidden: Invalid token" });
        }

        req.admin = token_decode; // Attach admin details to request object
        next();
    } catch (error) {
        console.error("Auth Error:", error);
        return res.status(401).json({ success: false, message: "Unauthorized: Invalid or Expired Token" });
    }
};

export default authAdmin;
