import Usuario from '../models/Usuarios.js';
import generarId from '../helpers/generarId.js';

//Registro de usuario
const registrar  = async (req, res) =>{

    // evitar duplicados
    const {email} = req.body;
    const existeUsuario = await Usuario.findOne({ email });

    //comprobacion 
    if (existeUsuario) {
        const error = new Error("Usuario ya existe")
        return res.status(400).json({msg: error.message})
    }

   try {
    const usuario = new Usuario(req.body);
    usuario.token = generarId();
    const usuarioAlmacenado = await usuario.save();
    res.json(usuarioAlmacenado);
   } catch (error) {
    console.log(error);
   } 

}
//Registro de usuario

//Autenticar usuario
const autenticar = async (req, res) => {
    
    const {email, password} = req.body;

    //comprobar si el usuario existe
    const usuario = await Usuario.findOne({email})
    console.log(usuario)

    //comprobar si el usuario esta confirmado
    //comrprobar su password

}
//Autenticar usuario

export { registrar, autenticar };