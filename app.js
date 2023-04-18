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

const ContainerAutos=document.querySelector("#ContainerAutos")

TodosAutos.forEach(function(elemento){
    console.log(elemento);
    ContainerAutos.innerHTML += `
                     <div class="producto">
                     <img src=${elemento.imagen} alt="producto">
                     <h3>${elemento.nombre}</h3>
                     <p>${elemento.marca}</p>
                     <p>${elemento.descripcion}</p>
                     <strong><p>$ ${elemento.precio}</p></strong>  
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
