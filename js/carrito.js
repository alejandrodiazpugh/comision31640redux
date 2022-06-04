// agregar elementos a la tabla de carrito
const recuperarCarrito = JSON.parse(localStorage.getItem("carrito"));


const enCarrito = () => {
    const tablaCarrito = document.querySelector("#carritoTabla");
    const contar = {};
    recuperarCarrito.forEach((el) => {
        contar[el.id] = (contar[el.id] || 0) + 1;
        const tbody = document.createElement("tbody");
        tablaCarrito.append(tbody);
        const idDeFila = `${el.nombre.slice(0,4)}-${contar[el.id]}`; //genera un ID dependiendo de la cantidad del mismo elemento en el carrito
        tbody.innerHTML = `
        <tr id="${idDeFila}">
            <th scope="row" class="producto${el.id}">${contar[el.id]}</th>
            <td class="imgRow"><img src=${el.img} class="cartImg"></td>
            <td class="text-center">${el.nombre}</td>
            <td class="text-center">$${el.precio}</td>
            <td class="text-center">$${el.precio * contar[el.id]}</td>
            <td class="text-right"><button class="btn btn-danger btnEliminar p-1 m-0" >Eliminar</button></td>
        </tr>
        `
        if((parseFloat(idDeFila[5])) > 1) { //revisa si existe ya otro elemento en la tabla del mismo producto
            const filaAnterior = document.querySelector(`#${idDeFila.slice(0,5) + (contar[el.id]-1)}`);
            filaAnterior.remove();  //elimina la fila del producto con menor cantidad de la actual en carrito
        }
    });
}

window.addEventListener("DOMContentLoaded", enCarrito())

// hacer funcional el boton de eliminar

const btnEliminar = document.querySelectorAll(".btnEliminar");
for(let i = 0; i < btnEliminar.length; i++) {
    btnEliminar[i].addEventListener("click", () =>{
        const nombreDePrograma = btnEliminar[i].parentElement.parentElement.childNodes[5].innerHTML;
        recuperarCarrito.forEach((producto) => {
            if(nombreDePrograma === producto.nombre) {
                console.log(recuperarCarrito.indexOf(producto));
                recuperarCarrito.splice(recuperarCarrito.indexOf(producto), 1);
                localStorage.setItem("carrito",JSON.stringify(recuperarCarrito));
                actualizarBadge;
                window.location.reload();
    
            };
        })
        
    });
}


// for(let i = 0; i < btnEliminar.length; i++) {
//     btnEliminar[i].addEventListener("click", () => {
//         const nombreDePrograma = btnEliminar[i].parentElement.parentElement.childNodes[3].innerHTML;
//         recuperarCarrito.forEach((el)=>{
//             if(el.nombre === nombreDePrograma) {
//                 console.log(recuperarCarrito.indexOf(el));
//                 // btnEliminar[i].parentElement.parentElement.parentElement.remove(btnEliminar[i].parentElement.parentElement); Esto la elimina del DOM pero no del carrito
//                 localStorage.removeItem("carrito".);
//                 actualizarBadge;
//             }
//         })
//     })
// }

//boton de eliminar todo

document.querySelector(".btnEliminarTodo").addEventListener("click",() => {
    localStorage.removeItem("carrito");
    actualizarBadge;
    window.location.reload();
});


//calcular total a pagar 
const calcularTotal = () => {
    const total = document.querySelector(".totalCarrito");
    let preciosDeCarrito = [];
    recuperarCarrito.forEach((producto) => {
        preciosDeCarrito.push(producto.precio);
    })
    total.innerHTML = `$${preciosDeCarrito.reduce((partialSum,a) => partialSum + a, 0)}` //StackOverflow jeje
}

calcularTotal();


//Finalizar compra

const pagar = () => {
        const btnPagar = document.querySelector(".btnPagar");
        btnPagar.classList.remove("text-hide");
        btnPagar.addEventListener("click", () => {
            swal("Éxito","Tu compra se ha realizado con éxito","success")
            .then(()=> {
                localStorage.removeItem("carrito");
                window.location.reload();
            });
        })
        
    }

pagar();