import mongoose from "mongoose";

const ofertaSchema = mongoose.Schema({
    curso: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso',
        required: true
    }]
})

const Oferta = mongoose.model('Oferta', ofertaSchema)

export default Oferta;