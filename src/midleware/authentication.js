import jwt from "jsonwebtoken";

export const authentication = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];

        // No viene token → devolvemos JSON limpio
        if (!authHeader) {
            return res.status(401).json({ message: "Token no proporcionado" });
        }

        // Intentamos separar "Bearer token"
        const parts = authHeader.split(" ");

        if (parts.length !== 2 || parts[0] !== "Bearer") {
            return res.status(401).json({ message: "Formato de token inválido" });
        }

        const token = parts[1];

        // Verificar token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
        
    } catch (error) {
        console.error("Error en authentication:", error.message);
        return res.status(403).json({ message: "Token inválido o expirado" });
    }
};
