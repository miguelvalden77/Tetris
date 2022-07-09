//Variables globales
const canvas = document.getElementById("canvas")
const contexto = canvas.getContext("2d")
const startScreen = document.getElementById("start")
const startButton = document.getElementById("start-button")
const FPS = 50
const pieza = new Piezas()


// Funciones
const gameLoop = ()=>{
    console.log("Funciono")

    // Limpieza del canvas
    contexto.clearRect(0, 0, canvas.width, canvas.height)

    // Movimientos
    pieza.dibujarPiezas()

    // Dibujados


    // Recursión
    setInterval(gameLoop, 1000 / FPS)

}


// AddEventListeners
startButton.addEventListener("click", ()=>{

    startScreen.style.display = "none"
    canvas.style.display = "block"

    addEventListener("load", gameLoop())

})

