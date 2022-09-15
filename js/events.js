class paquete {
    constructor(titulo, caracteristicas, precio){
        this.titulo = titulo;
        this.caracteristicas = caracteristicas;
        this.precio = precio;
    }
};

const paquete1 = new paquete('Golden Pass', 'Entrada al evento, hospedaje en el destino, comida, bebidas, playera, vaso y parche conmemorativos.', '3000');
const paquete2 = new paquete('Silver Pass', 'Entrada al evento, hospedaje en el destino, comida y bebidas', '2000');


const paquetes = [];


paquetes.push(paquete1);
paquetes.push(paquete2);


function mostrarPrecio(paquete){

    const contenedorDePrecios = document.getElementById("contenedor-precio");
    contenedorDePrecios.innerHTML = "";
  
    contenedorDePrecios.innerHTML = `
      Precio: $ ${paquete.precio} 
    `;
  }


  function crearBotonSeleccionar(paquete){
    const button = document.createElement("button");
    button.innerText = "Seleccionar";
    button.addEventListener("click", () => {
        mostrarPrecio(paquete);
      })
    return button;
  }

function mostrarPaquetes(paquetes) {
    const contenedorDePaquetes = document.getElementById('contenedor-de-paquetes');
    contenedorDePaquetes.innerHTML = "";

    paquetes.forEach(paquete => {
        const divPaquete = document.createElement("div"); // <div></div>
        divPaquete.classList.add('paquete');// <div class='paquete'></div>
        divPaquete.innerHTML = `
        <h3>${paquete.titulo}</h3>
        <p>${paquete.caracteristicas}</p>
        <p>$ ${paquete.precio}</p>
        `;
        
     // ==========
        const botonSeleccionar = crearBotonSeleccionar(paquete)
        divPaquete.appendChild(botonSeleccionar);
        contenedorDePaquetes.append(divPaquete);

    });    
}



mostrarPaquetes(paquetes);

