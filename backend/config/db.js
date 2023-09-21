import mongoose from "mongoose";

const conectarDB = async () => {
    // se necesita el try para saber si se conecto o no a la base de datos
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        //para saber si se conecto
        const url = `${connection.connection.host}: ${connection.connection.port}`;
        console.log(`MongoDB conectado en : ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`)
        // termina con el proceso 
        process.exit(1);
    }
}

export default conectarDB;