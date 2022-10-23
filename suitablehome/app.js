const express = require("express");
const app = express();
const port = process.env.PORT ||3000;

//Conexión a base de datos
const mongoose = require('mongoose');

const user ='Cath';
const password = '99858';
const dbname = 'bdsuitablehome'
const uri =`mongodb+srv://${user}:${password}@cluster1.aymopau.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true}) 
.then(()=> console.log('Base de datos conectada'))
.catch(e => console.log('error de conexión', e))

//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"))


//rutas web
app.use("/", require("./router/rutasweb"))
app.use("/inmuebles", require("./router/Inmuebles"))

app.use((req, res, next) => {
    res.status(404).render("404", {titulo404:"404", descripcion404:"Página no disponible"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});