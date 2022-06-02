// agregar elementos a la tabla de carrito

const esperarCarrito = new Promise((res,rej) => {
    res(actualizarBadge)
})

const enCarrito = () => {
    const tablaCarrito = document.querySelector("#carritoCuerpo");
    const recuperarCarrito = JSON.parse(localStorage.getItem("carrito"));
    console.log(recuperarCarrito);
    recuperarCarrito.forEach((el) => {
        tablaCarrito.textContent = `
        <tr>
            <th scope="row"></th>
            <td>${el.nombre}</td>
            <td>$${el.precio}}</td>
            <td>@mdo</td>
        </tr>
        `
    });
}

window.addEventListener("DOMContentLoaded", enCarrito())
