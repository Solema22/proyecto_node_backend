import { loginService } from "../services/auth.service.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);

    if (!token) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error en login" });
  }
};
