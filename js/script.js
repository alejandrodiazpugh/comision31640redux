//cargar el documento
function ready(callback) {
    if(document.readyState!="loading") callback();
    else if(document.addEventListener) document.addEventListener("DOMContentLoaded",callback);
    else document.attackEvent("onreadystatechange",function() {
        if(document.readyState=="complete") callback();
    })
}

// crear tarjetas con los programas

const cardSpace = document.querySelector("#cardSpace")
programas.forEach(programa => {
    const cardColumn = document.createElement("div");
    cardColumn.classList.add("col-sm-4");
    cardColumn.classList.add("my-3")
    cardColumn.innerHTML = `
            <div class="card text-center" style="width: 18rem;">
                <img class="card-img-top card__imageSize" src="${programa.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${programa.nombre}</h5>
                    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#" class="btn btn-primary">Ver Más</a>
                </div>
            </div>`
    document.querySelector(".cardRow").append(cardColumn);
    
});
