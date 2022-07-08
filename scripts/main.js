//Variables globales
const canvas = document.getElementById("canvas")
const contexto = canvas.getContext("2d")
const startScreen = document.getElementById("start")
const startButton = document.getElementById("start-button")
const FPS = 20



// Funciones
const inicio = ()=>{
    gameLoop()
}

const gameLoop = ()=>{
    console.log("Funciono")

    // Limpieza del canvas
    contexto.clearRect(0, 0, canvas.width, canvas.height)

    // Movimientos


    // Dibujados


    // Recursión
    setInterval(gameLoop, 1000 / FPS)

}


// AddEventListeners
addEventListener("load", inicio)

