const express = require("express")
const app = express()
const PORT= 3030
const path= require("path")


app.get("/",(req,res) => res.sendFile(path.join(__dirname,"index.html")))

app.listen(PORT, () => console.log("servidor corriendo"))



const TodosAutos= [
    {
        id:1,
        nombre:"Corsa",
        marca:"Chevrolet",
        descripcion:"Modelo 2012, unico dueño, acepto permuta",
        combustible:"Hibrido",
        condicion:"Usado",
        precio:  800000,
        imagen:"./styles/Productos/Corsa.jpg",

    },
    {
        id:2,
        nombre:"Duster",
        marca:"Renault",
        descripcion:"Modelo 2023, 0km, cuotas bajas",
        combustible:"Hibrido",
        condicion:"Nuevo",
        precio:  6000000,
        imagen:"./styles/Productos/Duster.jpg"
    },
    {
        id:3,
        nombre:"A3",
        marca:"Audi",
        descripcion:"Modelo 2018, llantas nuevas",
        combustible:"Nafta",
        condicion:"Usado",
        precio:  4000000,
        imagen:"./styles/Productos/A3.jpg"
    },
    {
        id:4,
        nombre:"Partner",
        marca:"Peugeot",
        descripcion:"Modelo 2023 0km",
        combustible:"Diesel",
        condicion:"nuevo",
        precio:  5400000,
        imagen:"./styles/Productos/Partner.jpg"
    }

]


