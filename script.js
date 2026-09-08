const tarjeta = document.querySelector(".tarjeta");

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤";

    // posición horizontal aleatoria dentro de la tarjeta
    corazon.style.left = Math.random() * 100 + "%";

    // tamaño aleatorio
    const tamano = Math.random() * 16 + 12;
    corazon.style.fontSize = tamano + "px";

    // duración de la caída aleatoria
    const duracion = Math.random() * 3 + 3;
    corazon.style.animationDuration = duracion + "s";

    tarjeta.appendChild(corazon);

    // eliminarlo después de que termine la animación para no acumular elementos
    setTimeout(() => {
        corazon.remove();
    }, duracion * 1000);
}

// crea un corazón nuevo cada 300ms
setInterval(crearCorazon, 300);
