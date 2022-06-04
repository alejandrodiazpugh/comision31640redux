//AJAX con JSON local - no pude encontrar ninguna API enfocada a esto, entonces simulo con un JSON local
const readJson = () => {
    fetch("../js/userReviews.json")
    .then(res => res.json())
    .then(data => {
        const espacioTarjetas = document.querySelector(".espacioTarjetas");
        for(usuario in data) {
            let columna = document.createElement("div");
            columna.classList.add("col");
            columna.innerHTML = `
                <div class="card bg-light my-5" style="width: 18rem; height: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">${data[usuario].nombre}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Programa: ${data[usuario].compra}</h6>
                        <p class="card-text">"${data[usuario].description}"</p>
                        <p class="card-text text-muted pt-5">${data[usuario].reseña}</p>
                    </div>
                </div>`
                espacioTarjetas.append(columna);
            }
            
        })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {console.log("Tarjetas creadas")})
    }

window.addEventListener("DOMContentLoaded",readJson())

