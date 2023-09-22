import Usuario from '../models/Usuarios.js';
import generarId from '../helpers/generarId.js';
import generarJWT from '../helpers/generarJWT.js';

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
    const usuario = await Usuario.findOne({ email })
    if (!usuario) {
        const error = new Error("El usuario no existe")
        return res.status(404).json({ msg: error.message })
    }

    //comprobar si el usuario esta confirmado 
    if (await usuario.comprobarPassword(password)) {
        res.json({
            _id: usuario._id,
            //nesecitamos averiguar
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id),
        })
    } else {
        const error = new Error("El password es incorrecto")
        return res.status(404).json({ msg: error.message })
    }
}
//Autenticar usuario

//Confirmación de cuenta via token
const confirmar = async (req, res) =>{
    const { token } = req.params
    const usuarioConfirmado = await Usuario.findOne({ token })

    if (!usuarioConfirmado) {
        const error = new Error("Token no valido")
        return res.status(404).json({ msg: error.message })
    }

    try {
        usuarioConfirmado.confirmado = true
        usuarioConfirmado.token = ""

        await usuarioConfirmado.save()
        res.json({msg: 'Usuario conrirmado correctamente'})

    } catch (error) {
        console.log(error)
    }
}
//Confirmación de cuenta via token

//recuperar contrseña
const olvidePassword = async (req, res) => {
    const { email } = req.body
    const usuario = await Usuario.findOne({ email })

    if(!usuario){
        const error = new Error("Usuario no existe")
        return res.status(404).json({msg: error.message})
    }
    
    try {
        usuario.toke = generarId()
        res.json({msg: 'Hemos enviado un email con las instrucciones'})
    } catch (error) {
        console.log(error)
    }
}
//recuperar contrseña

//comprobarToken
const comprobarToken = async (req, res) => {
    const { token } = req.params
    const tokenValido = await Usuario.findOne({ token })

    if(tokenValido){
        res.json({msg: 'Token valido y el usario existe'})
    }else{
        const error = new Error("Token no valido")
        return res.status(404).json({msg: error.message})
    }
}
//comprobarToken

//nuevoPassword
const nuevoPassword = async (req, res) => {
    const {token} = req.params
    const {password} = req.body

    const usuario = await Usuario.findOne({token})

    if (usuario) {
        //realizar cambios en contraseñ y token
        usuario.password = password
        usuario.token = ''
        //guardar cambios
        try {
            await usuario.save()
            res.json({ msg: "Password modificado correctamente" })
        } catch (error) {
            console.log(error)
        }

    } else {
        const error = new Error("Token no valido")
        return res.status(404).json({ msg: error.message })
    }
}
//nuevoPassword

//perfil
const perfil = async (req, res) => {
    //console.log('desde perfil...')
    const { usuario } = req

    res.json(usuario)
}
//perfil
export { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil };