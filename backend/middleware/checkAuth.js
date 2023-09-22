import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuarios.js';
const checkAuth = async (req, res, next) => {
    let token // Variable para almacenar el token JWT

    // Verificar si la solicitud HTTP contiene una cabecera "Authorization" que comience con "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // Extraer el token de la cabecera (eliminando la palabra "Bearer" y dejando solo el token)
            token = req.headers.authorization.split(' ')[1]

            // Verificar el token utilizando la clave secreta definida en process.env.JWT_SECRET
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            
            // Buscar al usuario correspondiente al ID almacenado en el token
            // y eliminar algunos campos sensibles antes de adjuntarlo a la solicitud (req)
            req.usuario = await Usuario.findById(decoded.id).select(
                "-password -confirmado -token -createdAt -updatedAt -__v"
            )

            // Continuar con la ejecución de la siguiente función middleware o controlador
            return next()
        } catch (error) {
            // En caso de error en la verificación del token, devolver una respuesta de error 404
            return res.status(404).json({ msg: "Hubo un error" })
        }
    } 

    // Si no se encuentra un token en la cabecera "Authorization", o si el token es inválido
    if (!token) {
        const error = new Error("Token no válido")
        res.status(401).json({ msg: error.message })
    }

    // Continuar con la ejecución de la siguiente función middleware o controlador
    next()
}

// Exportar la función checkAuth como módulo
export default checkAuth;