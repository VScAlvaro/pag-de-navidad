const luces = document.getElementById("luces");

let estado = true;

setInterval(() => {
    if (estado) {
        luces.classList.remove("encendida");
        luces.classList.add("apagada");
    } else {
        luces.classList.remove("apagada");
        luces.classList.add("encendida");
    }
    estado = !estado;
}, 900);