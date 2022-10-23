const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
    {res.render("index",{titulo:"Mi título dinámico"});});

router.get("/departamentos",(req,res) =>
    {res.render("departamentos",{tituloDepartamentos:"Inmuebles disponibles"})})

router.get('/Armenia',(req,res) =>
    { res.send('Estás en la página de Armenia')})

router.get('/Cartagena',(req,res) =>
    {
        res.send('Estás en la página de Cartagena')
    })
router.get('/Bogota',(req,res) =>
    {res.send('Estás en la página de Bogotá')})

router.get('/Giron',(req,res) =>
    {res.send('Estás en la página de Girón')})

router.get('/Manizales',(req,res) =>
    {res.send('Estás en la página de Manizales')})  
    
module.exports= router;