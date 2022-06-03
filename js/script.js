//cargar el documento
function ready(callback) {
    if(document.readyState!="loading") callback();
    else if(document.addEventListener) document.addEventListener("DOMContentLoaded",callback);
    else document.attackEvent("onreadystatechange",function() {
        if(document.readyState=="complete") callback();
    })
}
const actualizarBadge = () => {
    const badge = document.querySelector(".cartItems");
    badge.innerHTML = `${JSON.parse(localStorage.getItem("carrito")).length || 0}`;
}
window.addEventListener("DOMContentLoaded", ()=>{
    actualizarBadge();
});

//input de correo para newsletter
const btnNewsletter = document.querySelector("#btn-newsletter");

if(!!btnNewsletter) { // para no mostrar error en páginas donde no exista el elemento.
    btnNewsletter.addEventListener("click", () =>{
        const correo = document.querySelector("#newsletter").value;
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(validRegex.test(correo)) { //valida el contenido del input
            return swal("Éxito","Tu correo se ha registrado con éxito", "success");
        } else {
            return swal("Error", "El correo ingresado no está en el formato correcto", "error");
        }
    })
}   else {
    console.log("No hay botón de Newsletter en esta página");

}










