import Oferta from "../models/Oferta.js";
import Curso from "../models/Curso.js";

const obtenerOfertaCursos = async (req, res) => {
    const { id } = req.params;
    const oferta = await Oferta.findById(id);

    if (!oferta) {
        return res.status(404).json({ msg: "No se encontró la oferta" });
    }
    
    if (!oferta.curso) {
        return res.status(404).json({ msg: "La oferta no tiene un curso asociado" });
    }
    
    const ofertaConCurso = await oferta.populate("curso").execPopulate();
    res.json(ofertaConCurso);
};

const nuevoCurso = async (req, res) => {

    //verificación si el curso existe
    const cursoExiste = await Curso.findOne({ nombre: req.body.nombre });
    if (cursoExiste) {
        return res.status(400).json({ msg: "El curso ya existe" });
    }

    //Si no existe, crea el nuevo curso
    const curso = new Curso({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        tipoFormacion: req.body.tipoFormacion,
        horas: req.body.horas,
    });

    curso.creador = req.usuario._id;

    try {
        const cursoAlmacenado = await curso.save();
        res.json(cursoAlmacenado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear un nuevo curso" });
    }
};

const obtenerCurso = async (req, res) => {
    const { id } = req.params;
    try {
        const curso = await Curso.findById(id);
        if (!curso) {
            return res.status(404).json({ msg: "No se econtro el curso" });
        }
        res.json(curso);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener el curso" });
    }

};

const editarCurso = async (req, res) => {
    const { id } = req.params;

    try {
        const curso = await Curso.findById(id);
        if (!curso) {
            return res.status(404).json({ msg: "No se econtro el curso" });
        }
        curso.nombre = req.body.nombre || curso.nombre
        curso.descripcion = req.body.descripcion || curso.descripcion
        curso.tipoFormacion = req.body.tipoFormacion || curso.tipoFormacion
        curso.horas = req.body.horas || curso.horas

        curso.ultimaActaulizacion = {
            usuario: req.usuario._id,
            fecha: new Date()
        }

        const cursoEditado = await curso.save();
        res.json(cursoEditado);

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al editar el curso" });
    }

};

const eliminarCurso = async (req, res) => {
    const { id } = req.params;

    try {
        const curso = await Curso.findById(id);
        if (!curso) {
            return res.status(404).json({ msg: "No se econtro el curso" });
        }
        const cursoEliminado = await Curso.deleteOne({_id: id});
        res.json({ cursoEliminado, msg: "Proyecto eliminado"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar el curso" });
    }
};

export {
    obtenerOfertaCursos,
    nuevoCurso,
    obtenerCurso,
    editarCurso,
    eliminarCurso
}