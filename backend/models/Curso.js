import mongoose from "mongoose";

const cursoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    fechaFormacion: {
        type: Date,
        default: Date.now()
    },
    tipoFormacion: {
        type: String,
        required: true,
        enum: ['tecnologo', 'tecnico', 'especiales']
    },
    creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    horas: {
        type: Number,
        required: true
    }, 
    video: {
        type: String,
    },
    curricular: {
        type: String,
    },
    calificacion: {
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario',
        },
        puntuación: {
            type: Number,
        }
    },
    comentarios: {
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario',
        },
        texto: {
            type: String,
            trim: true
        }
    }
});

const Curso = mongoose.model('Curso', cursoSchema);

export default Curso;