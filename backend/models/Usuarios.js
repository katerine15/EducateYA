import mongoose from "mongoose";
import bcrypt from "bcrypt";
const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true, 
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false
    },
},
    {
        //dos columnas para confrimado y actualizado
        timestamps: true,
    }
);

usuarioSchema.pre('save', async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

usuarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
    //siempre que se vaya a hacer consultas a la base de datos hay que utlizar async y await
    return await bcrypt.compare(passwordFormulario, this.password) //retorna true o false
}


const Usuario = mongoose.model("Usuario", usuarioSchema);


export default Usuario;