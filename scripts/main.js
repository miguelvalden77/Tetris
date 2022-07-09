//Variables globales
const canvas = document.getElementById("canvas")
const contexto = canvas.getContext("2d")
const startScreen = document.getElementById("start")
const startButton = document.getElementById("start-button")
const FPS = 50
const tablero = new Tablero()


// Funciones

const inicio = ()=>{

    listeners()

    setInterval(gameLoop, 1000 / FPS)
    
}

const gameLoop = ()=>{
    console.log("Funciono")

    // Limpieza del canvas
    tablero.pieza.limpiarCanvas()

    // Movimientos
    tablero.pieza.estaAbajo()

    // Dibujados
    tablero.dibujarPanel()
    tablero.pieza.dibujarPiezas()
}


// AddEventListeners
startButton.addEventListener("click", ()=>{

    startScreen.style.display = "none"
    canvas.style.display = "block"

    addEventListener("load", inicio())

})

const listeners = ()=>{
    addEventListener("keydown", evt =>{
        const {key} = evt
        switch(key){
            case "ArrowUp": tablero.pieza.rotar()
            break

            case "ArrowDown": 
            break

            case "ArrowLeft": tablero.pieza.moveDrch()
            break

            case "ArrowRight": tablero.pieza.moveIzq()
            break
        }
    })
}

