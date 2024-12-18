/* Obtener referencias al parrafo al button */

const color = document.getElementById("color");
const button = document.getElementById("button");

/* Manejar el evento */

button.addEventListener( "click" , cambiarColor )

/* Definir la función */

function cambiarColor() {
    /* Codigo que se ejecuta */

    /* Función Anidada ⬇️ */
    function colores() {
        const opciones = "0123456789ABCDEF";
        let colorHex = "#";

        /* Recorrer el string opciones */
        for (let i = 0 ; i < 6 ; i++ ) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += opciones[indiceAleatorio]; // #000000
        }

    return colorHex;
    }

    /* Actualiza el texto ⬇️ */
    let colorAleatorio = colores();

    /* Actualiza el color de fondo ⬇️ */
    color.textContent = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
}