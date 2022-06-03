// agregar elementos a la tabla de carrito
const recuperarCarrito = JSON.parse(localStorage.getItem("carrito"));


const enCarrito = () => {
    const tablaCarrito = document.querySelector("#carritoTabla");
    const contar = {};
    recuperarCarrito.forEach((el) => {
        contar[el.id] = (contar[el.id] || 0) + 1;
        console.log(el.id)
        const tbody = document.createElement("tbody");
        tablaCarrito.append(tbody);
        tbody.innerHTML = `
        <tr>
            <th scope="row" class="producto${el.id}">${contar[el.id]}</th>
            <td class="text-center">${el.nombre}</td>
            <td class="text-center">$${el.precio}</td>
            <td class="text-center">$${el.precio * contar[el.id]}</td>
            <td class="text-right"><button class="btn btn-danger btnEliminar p-1 m-0">Eliminar</button></td>
        </tr>
        `
        if(contar[el.id] > 1) {
            console.log(tbody.childNodes[1].innerText)
        } else {

        }
       
    });
}

window.addEventListener("DOMContentLoaded", enCarrito())

// hacer funcional el boton de eliminar

const btnEliminar = document.querySelectorAll(".btnEliminar");
for(let i = 0; i < btnEliminar.length; i++) {
    btnEliminar[i].addEventListener("click", () => {
        const nombreDePrograma = btnEliminar[i].parentElement.parentElement.childNodes[3].innerHTML;
        recuperarCarrito.forEach((el)=>{
            if(el.nombre === nombreDePrograma) {
                console.log("aquí está")
                localStorage.removeItem(el);
            }
        })
    })
}

//boton de eliminar todo

document.querySelector(".btnEliminarTodo").addEventListener("click",() => {
    localStorage.removeItem("carrito");
    actualizarBadge;
    window.location.reload();
});