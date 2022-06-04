window.addEventListener("DOMContentLoaded", ()=>{
    actualizarBadge();
});

// crear tarjetas con los programas

const cardSpace = document.querySelector("#cardSpace")
programas.forEach(programa => {
    console.log(typeof(programa));
    const cardColumn = document.createElement("div");
    cardColumn.classList.add("col-sm-4");
    cardColumn.classList.add("my-3")
    cardColumn.innerHTML = `
            <div class="card text-center" style="width: 18rem">
                <img class="card-img-top card__imageSize" src="${programa.img}" alt="Card image cap" style="max-height: 12rem">
                <div class="card-body">
                    <h5 class="card-title">${programa.nombre}</h5>
                    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <h6 class="card-text">$${programa.precio}</h6>
                    <button class="btn btn-dark btn-agregarACarrito">Agregar a Carrito</button>
                </div>
            </div>`
    document.querySelector(".cardRow").append(cardColumn);
    
});


//agregar programas al carrito

const btnCarrito = document.querySelectorAll(".btn-agregarACarrito");
btnCarrito.forEach((el)=> { //le agrega evento a cualquier boton generado
    el.addEventListener("click", () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const nombreDePrograma = el.parentElement.childNodes[1].innerText; //recupera el nombre del programa
        for(let i = 0; i<programas.length; i++) {
            if(programas[i].nombre === nombreDePrograma) { //match del nombre del programa en stock con el de la tarjeta para recuperar todos los datos
                carrito.push(programas[i]);
                localStorage.setItem("carrito",JSON.stringify(carrito));
             } 
        }
        actualizarBadge();
        swal(`Agregado al carrito.`, `${nombreDePrograma}`, "success"); 
    })
})

const actualizarBadge = () => {
    const badge = document.querySelector(".cartItems");
    badge.innerHTML = `${JSON.parse(localStorage.getItem("carrito")).length || 0}`;
}