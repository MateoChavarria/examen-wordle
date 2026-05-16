/**
 * Lógica del Juego Wordle 
 */

// Listado de palabras para el juego (puede ser expandido para escalabilidad)
const listaPalabras = ["REDES", "DATOS", "NUBES", "LINUX", "FIBRA", "NODOS", "PROXY", "CARLOS"];
// Selección aleatoria de la palabra objetivo
const palabraObjetivo = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];

let intentosMaximos = 6;
let intentoActual = 0;

// Inicialización del tablero de juego en el DOM
const contenedorTablero = document.getElementById("tablero");
for (let i = 0; i < 6; i++) {
    let filaDiv = document.createElement("div");
    filaDiv.className = "fila";
    filaDiv.id = `fila-${i}`;
    for (let j = 0; j < 5; j++) {
        let casillaDiv = document.createElement("div");
        casillaDiv.className = "casilla";
        filaDiv.appendChild(casillaDiv);
    }
    contenedorTablero.appendChild(filaDiv);
}

/**
 * Función principal para procesar el intento del usuario
 */
function verificarPalabra() {
    const inputUsuario = document.getElementById("intento");
    const palabraIntento = inputUsuario.value.toUpperCase();

    // Validación de integridad de datos
    if (palabraIntento.length !== 5) {
        alert("Debe ingresar exactamente 5 letras.");
        return;
    }

    const filaUI = document.getElementById(`fila-${intentoActual}`);
    const casillasUI = filaUI.getElementsByClassName("casilla");
    let letrasObjetivoAux = palabraObjetivo.split("");

    // Primera fase: Validación de posiciones exactas (Verde)
    for (let i = 0; i < 5; i++) {
        casillasUI[i].textContent = palabraIntento[i];
        if (palabraIntento[i] === palabraObjetivo[i]) {
            casillasUI[i].classList.add("correcto");
            letrasObjetivoAux[i] = null; // Evitar conteo doble
        }
    }

    // Segunda fase: Validación de letras existentes en posición incorrecta (Amarillo)
    for (let i = 0; i < 5; i++) {
        if (!casillasUI[i].classList.contains("correcto")) {
            const indexLetra = letrasObjetivoAux.indexOf(palabraIntento[i]);
            if (indexLetra !== -1) {
                casillasUI[i].classList.add("presente");
                letrasObjetivoAux[indexLetra] = null;
            } else {
                casillasUI[i].classList.add("ausente");
            }
        }
    }

    // Control de estado del juego
    intentoActual++;
    inputUsuario.value = "";

    if (palabraIntento === palabraObjetivo) {
        document.getElementById("mensaje").textContent = "¡Misión Cumplida! 🎉";
        inputUsuario.disabled = true;
    } else if (intentoActual === intentosMaximos) {
        document.getElementById("mensaje").textContent = `Game Over. Era: ${palabraObjetivo}`;
    }
}