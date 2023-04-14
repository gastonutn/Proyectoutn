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
    },
    {
        id:5,
        nombre:"Focus",
        marca:"Ford",
        descripcion:"Modelo 2020, excelente estado",
        combustible:"Nafta",
        condicion:"usado",
        precio:  3800000,
        imagen:"./styles/Productos/Focus.jpg"
    },
    {
        id:6,
        nombre:"207",
        marca:"Peugeot",
        descripcion:"Modelo 2017, unico dueño, full",
        combustible:"Nafta",
        condicion:"Usado",
        precio:  2300000,
        imagen:"./styles/Productos/207.jpg"
    },
    {
        id:7,
        nombre:"Megane",
        marca:"Renault",
        descripcion:"Modelo 2023, 0km",
        combustible:"Diesel",
        condicion:"Nuevo",
        precio:  120000,
        imagen:"./styles/Productos/Megane.jpg"
    },
    {
        id:8,
        nombre:"A5",
        marca:"Audi",
        descripcion:"Modelo 2022, impecable",
        combustible:"Nafta",
        condicion:"Usado",
        precio:  6000000,
        imagen:"./styles/Productos/A5.jpg"
    },
    {
        id:9,
        nombre:"Cruze",
        marca:"Chevrolet",
        descripcion:"Modelo 2020, poco uso, pequeños detalles",
        combustible:"Nafta",
        condicion:"Usado",
        precio:  5500000,
        imagen:"./styles/Productos/Cruze.jpg"
    },
    {
        id:1,
        nombre:"Gol",
        marca:"wolsvagen",
        descripcion:"Modelo 2016, escucho ofertas",
        combustible:"Hibrido",
        condicion:"Usado",
        precio:  2000000,
        imagen:"./styles/Productos/gol.png"
    },

]

const ContainerAutos=document.querySelector("#ContainerAutos")

TodosAutos.forEach(function(elemento){
    console.log(elemento);
    ContainerAutos.innerHTML += `
                     <div class="producto">
                     <img src=${elemento.imagen} alt="producto">
                     <h3>${elemento.nombre}</h3>
                     <p>${elemento.marca}</p>
                     <p>${elemento.descripcion}</p>
                     <p>${elemento.precio}</p>
                     <a href="">ver mas</a>
                     <button class="botonn" id=${elemento.id} >Añadir al carrito</button>
                      </div>
    `  
    
})

let botones=document.querySelectorAll(`.botonn`)
    botones.forEach(function(boton){
        addTocart(boton)

    })

function addTocart(boton){
    boton.addEventListener("click",function(evento){
        let id=evento.target.id
       let busca= TodosAutos.find((elemento) => {return elemento.id==id} )
       console.log(busca)
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agrego al carrito!',
        showConfirmButton: false,
        timer: 1500
      })
    })
}
