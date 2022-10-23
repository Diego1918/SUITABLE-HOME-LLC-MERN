const express = require("express");
const router = express.Router();

const Inmueble = require("../models/inmueble")

router.get("/", async (req,res)=>{
    try{ const arrayInmueblesDB = await Inmueble.find()
    console.log(arrayInmueblesDB)

    res.render("inmuebles",{
        arrayInmuebles:arrayInmueblesDB})

    } catch(error){console.log(error)} })


module.exports= router;