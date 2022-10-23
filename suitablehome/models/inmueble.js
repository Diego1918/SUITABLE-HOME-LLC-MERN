const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const inmuebleSchema = new Schema({
    direccion: String,
    tipo: String,
    banos: String,
    habitaciones: String,
    metros2: String,
    condicion: String,
    precio: String,
})

//crear modelo
const Inmueble = mongoose.model("Inmueble",inmuebleSchema);

module.exports = Inmueble;  