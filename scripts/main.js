const canvas = document.getElementById("canvas")
const contexto = canvas.getContext("2d")
let FPS = 50
const startBtn = document.getElementById("start-button")
const startScreen = document.getElementById("start")
const gameOverScreen = document.getElementById("gameOver")
const resetButton = document.getElementById("reset-button")
const canvasContainer = document.getElementById("canvas-container")
const scoreContainer = document.getElementById("score")
const gameOverAudio = document.getElementById("game-over-audio")
const beep = document.getElementById("beep")
const filaCompleta = document.getElementById("fila")
const victoria = document.getElementById("victoria")
const restart = document.getElementById("restart")
const finish = document.getElementById("foto-finish")
const finishBtn = document.getElementById("hacer-foto")
const pause = document.getElementById("Pause")
const continuar = document.getElementById("Continue")
const canvasFoto = document.getElementById("foto")
const fotoContext = canvasFoto.getContext("2d")
const video = document.getElementById("video")
const tetrisMusic = document.getElementById("tetris")
const invertido = document.getElementById("invertido")
const restart_2 = document.getElementById("restart-2")
const range = document.getElementById("range")
const nombreJugador = document.getElementById("nombre-jugador")
const contenedorNombre = document.getElementById("contenedor-nombre")
const body = document.getElementById("body")
const pointsToWin = document.getElementById("dificultad")

const seccion_pieza = document.getElementById("next-pieza-section")
const contexto_pieza = seccion_pieza.getContext("2d")

let score = 0
let correrJuego = true
let win = 15
let filaCompletaX = false

const piezas = [
    [
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ]
    ],
  
    [
      [
        [0, 0, 0, 0],
        [2, 2, 2, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 2, 0],
        [0, 0, 2, 0],
        [0, 0, 2, 0],
        [0, 0, 2, 0]
      ],
  
      [
        [0, 0, 0, 0],
        [2, 2, 2, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 2, 0],
        [0, 0, 2, 0],
        [0, 0, 2, 0],
        [0, 0, 2, 0]
      ]
    ],
  
    [
      [
        [0, 0, 0, 0],
        [0, 0, 3, 3],
        [0, 3, 3, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 3, 0],
        [0, 0, 3, 3],
        [0, 0, 0, 3],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 0, 0],
        [0, 0, 3, 3],
        [0, 3, 3, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 3, 0],
        [0, 0, 3, 3],
        [0, 0, 0, 3],
        [0, 0, 0, 0]
      ]
    ],
  
    [
      [
        [0, 0, 0, 0],
        [0, 4, 4, 0],
        [0, 0, 4, 4],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 0, 4],
        [0, 0, 4, 4],
        [0, 0, 4, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 0, 0],
        [0, 4, 4, 0],
        [0, 0, 4, 4],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 0, 4],
        [0, 0, 4, 4],
        [0, 0, 4, 0],
        [0, 0, 0, 0]
      ]
    ],
  
    [
      [
        [0, 0, 0, 0],
        [0, 5, 5, 5],
        [0, 5, 0, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 5, 0],
        [0, 0, 5, 0],
        [0, 0, 5, 5],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 0, 5],
        [0, 5, 5, 5],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 5, 5, 0],
        [0, 0, 5, 0],
        [0, 0, 5, 0],
        [0, 0, 0, 0]
      ]
    ],
  
    [
      [
        [0, 0, 0, 0],
        [0, 6, 6, 6],
        [0, 0, 0, 6],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 6, 6],
        [0, 0, 6, 0],
        [0, 0, 6, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 6, 0, 0],
        [0, 6, 6, 6],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 6, 0],
        [0, 0, 6, 0],
        [0, 6, 6, 0],
        [0, 0, 0, 0]
      ]
    ],
  
    [
      [
        [0, 0, 0, 0],
        [0, 7, 7, 7],
        [0, 0, 7, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 7, 0],
        [0, 0, 7, 7],
        [0, 0, 7, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 7, 0],
        [0, 7, 7, 7],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
  
      [
        [0, 0, 7, 0],
        [0, 7, 7, 0],
        [0, 0, 7, 0],
        [0, 0, 0, 0]
      ]
    ]
]
const tablero = [
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
]

const next_tablero = 
[
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

const margen = 4
const anchoPieza = 40
const altoPieza = 40
let pieza
const colores = ["red", "green", "blue", "brown", "orange", "pink", "purple", "red"]

pointsToWin.textContent = win

// Función creadora
const ObjetoPieza = function(){

    this.x = 0
    this.y = 0
    this.angulo = 1
    this.tipoPieza
    this.dist = 50
    this.aumentoDist = 0

    this.dibujar = ()=>{
        for(fila = 0; fila < 4; fila ++){
            for(col = 0; col < 4; col ++){
                if(piezas[this.tipoPieza][this.angulo][fila][col] !== 0){
                    contexto.fillStyle = colores[this.tipoPieza + 1]
                    const x0 = (this.x + col - 1) * anchoPieza
                    const y0 = (this.y + fila - margen) * altoPieza
                    contexto.fillRect(x0, y0, anchoPieza, altoPieza)
                    // contexto.lineTo(x0, y0, anchoPieza, altoPieza)
                    // contexto.stroke()
                }
            }
        }
    }

    this.dibujar_next_pieza = ()=>{
      contexto_pieza.clearRect(0, 0, seccion_pieza.width, seccion_pieza.height)
      for(fila = 0; fila < 4; fila ++){
          for(col = 0; col < 4; col ++){
              if(piezas[this.tipoPieza][0][fila][col] !== 0){
                  contexto_pieza.fillStyle = colores[this.tipoPieza + 1]
                  const x0 = (col) * anchoPieza
                  const y0 = (fila) * altoPieza
                  contexto_pieza.fillRect(x0, y0, anchoPieza, altoPieza)
                  // contexto.lineTo(x0, y0, anchoPieza, altoPieza)
                  // contexto.stroke()
              }
          }
      }
    }

    this.filaCompleta = ()=>{
      let completa = false
      for(let fila = margen; fila < 20; fila ++){
        completa = true
        for(let col = 1; col < 10 + 1; col ++){
          if(tablero[fila][col] === 0){
            completa = false
          }
        }
        if(completa){
            filaCompleta.play()
            score ++
            scoreContainer.textContent = score
            
            // Aumento dificultad
            // FPS = this.aumentoDificultad(score, FPS)
            //filaCompletaX = true
            
            for(col = 1; col < 10 + 1; col ++){
              tablero[fila][col] = 0
            }
            // nuevo
            for(let xfila = fila - 1; xfila > 4; xfila--){
              for(let col = 1; col < 10 + 1; col ++){
                tablero[xfila + 1][col] = tablero[xfila][col]
                tablero[xfila][col] = 0
              }
            }
            // hasta aqui
            clearInterval(intervalId)
            intervalId = null
            intervalId = setInterval(gameLoop, 1000 / aumentoDificultad(score))
          }
        }
      }
    

    this.nueva = ()=> {
        filaCompletaX = false
        const posicion = Math.floor(Math.random()*7)
        this.tipoPieza = posicion
        this.x = 4
        this.y = 0
        this.dibujar_next_pieza()
    }

    this.estaAbajo = ()=>{
        if(this.aumentoDist < this.dist){
            this.aumentoDist ++
        } else{
           if(!this.colision(this.angulo, this.y + 1, this.x)){
              this.y++
           } else{
             this.dibujarEnPanel()
             this.filaCompleta()
             this.nueva()
            if(this.gameOver()){
              gameOverAudio.play()
              reseteo()
              gameOverScreen.style.display = "block"
              canvasContainer.style.display = "none"
            }
           }
           this.aumentoDist = 0
        }
    }

    this.rotar = () =>{
      if(correrJuego === false) return

        let nuevoAngulo = this.angulo
        if(nuevoAngulo < 3){
          beep.play()
          nuevoAngulo ++
        } else{
          beep.play()
          nuevoAngulo = 0
        }
        if(!this.colision(nuevoAngulo, this.y, this.x)){
          this.angulo = nuevoAngulo
          beep.play()
        } 
    }

    this.abajo = ()=>{
        if(!this.colision(this.angulo, this.y + 1, this.x)){
          this.y ++
        }
    }

    this.izq = ()=>{
      if(!this.colision(this.angulo, this.y, this.x - 1)){
        this.x --
      }
    }

    this.der = ()=>{
        if(!this.colision(this.angulo, this.y, this.x + 1)){
          this.x ++
        }
    }

    this.colision = (nuevoAngulo, filaNueva, colNueva)=>{
      let haycolision = false
      for(let fila = 0; fila < 4; fila++){
        for(let col = 0; col < 4; col++){
          if(piezas[this.tipoPieza][nuevoAngulo][fila][col] !== 0){
            if(tablero[filaNueva + fila][colNueva + col] !== 0){
              haycolision = true
            }
          }
        }
      }
      return haycolision
    }

    this.dibujarEnPanel = ()=>{
      for(let fila = 0; fila < 4; fila ++){
        for(let col = 0; col < 4; col ++){
          if(piezas[this.tipoPieza][this.angulo][fila][col] !== 0){
            tablero[this.y + fila][this.x + col] = piezas[this.tipoPieza][this.angulo][fila][col]
          }
        }
      }
    }

    this.gameOver = ()=>{
      let gameOver = false
      for(let fila = 1; fila < 10 + 1; fila ++){
        if(tablero[2][fila] !== 0){
          gameOver = true
          body.classList.add("fondo")
          tetrisMusic.pause()
        }
      }
      return gameOver
    }

    this.nueva()
}

const aumentoDificultad = (puntuacion)=> {
  if(puntuacion >= 10){
    return 200
  }
  if(puntuacion >= 5){
    return 100
  } 

  return 50
}

// Funciones
const ganar = ()=>{
  if(score >= win){
    canvasContainer.style.display = "none"
    victoria.style.display = "flex"
    body.classList.add("fondo")
    correrJuego = false
    tetrisMusic.pause()
  }
}

const reseteo = ()=>{
  for (let fila = 0; fila < 16 + 1; fila ++){
    for(let col = 0; col < 10 + 2; col ++){
      if(tablero[fila][col] !== 9){
        tablero[fila][col] = 0
      }
    }
  }
}

const dibujarTablero = ()=>{
    for(let fila = 0; fila < 16 + margen; fila ++){
        for(let col = 1; col < 10 + 1; col ++){
            if(tablero[fila][col] !== 0){
                contexto.fillStyle = colores[tablero[fila][col]]
                const x0 = (col - 1) * anchoPieza
                const y0 = (fila - margen) * altoPieza
                contexto.fillRect(x0, y0, anchoPieza, altoPieza)
            }
        }
    }
}

const limpiarCanvas = ()=>{
    contexto.fillStyle = "#F4F4EE"
    contexto.fillRect(0, 0, canvas.width, canvas.height)
}


const listeners = ()=>{
    addEventListener("keydown", evt =>{
        const {key} = evt
        switch(key){
            case "ArrowUp": pieza.rotar()
            break

            case "ArrowDown": pieza.abajo()
            break

            case "ArrowLeft": pieza.izq()
            break

            case "ArrowRight": pieza.der()
            break
        }
    })
}

let intervalId

const inicio = ()=>{

    listeners()
    pieza = new ObjetoPieza()

    intervalId = setInterval(gameLoop, 1000 / aumentoDificultad(score))

}

const gameLoop = ()=>{

  if(correrJuego === true){

    // if(filaCompletaX == true){
    //   console.log("Hola")
    //   clearInterval(intervalId)
    //   intervalId = null
    //   inicio()
    // }

    pieza.gameOver()
    nombres()
    limpiarCanvas()
    pieza.estaAbajo()
    dibujarTablero()
    pieza.dibujar()
    ganar()
  }
}

// AddEventListeners
startBtn.addEventListener("click", ()=>{
    if(nombreJugador.value.trim() === ""){
      nombreJugador.classList.add("invalid_name")
      return
    }  

    correrJuego = true
    score = 0
    startScreen.style.display = "none"
    canvasContainer.style.display = "flex"
    // FPS = 50
    tetrisMusic.play()

    addEventListener("load", inicio())

})

pause.addEventListener("click", ()=>{
  correrJuego = false
  tetrisMusic.pause()
})

continuar.addEventListener("click", ()=>{
  correrJuego = true
  tetrisMusic.play()
})


resetButton.addEventListener("click", ()=>{
    startScreen.style.display = "flex"
    correrJuego = false
    body.classList.remove("fondo")
    gameOverScreen.style.display = "none"
    window.location.reload()
})

restart_2.addEventListener("click", ()=>{
  nombreJugador.classList.remove("invalid_name")
  victoria.style.display = "none"
  startScreen.style.display = "flex"
  body.classList.remove("fondo")
  score = 0
  window.location.reload()
})

restart.addEventListener("click", ()=>{
  body.classList.remove("fondo")
  victoria.style.display = "none"
  finish.style.display = "flex"
})

// video, foto
const mostrarEnVideo = (stream)=>{
  window.strem = stream
  video.srcObject = stream
}

const imagen = async ()=>{ //asíncrono

   // Objeto con los permisos que necesita stream
   const constraints = {
      audio: false,
      video: {
          width: 400,
          height: 300
      }
  }
  // stream es la respuesta del objeto navigator
  const stream = await navigator.mediaDevices.getUserMedia(constraints)

  mostrarEnVideo(stream)
}

finishBtn.addEventListener("click", ()=>{
  imagen()
  fotoContext.drawImage(video, 0, 0, canvasFoto.width, canvasFoto.height)
})

range.addEventListener("mousemove", ()=>{
  tetrisMusic.volume = range.value
})

invertido.addEventListener("click", ()=>{
  startScreen.style.display = "flex"
  finish.style.display = "none"
  window.location.reload()
})

const nombres = ()=>{
  let nombre = nombreJugador.value
  contenedorNombre.textContent = nombre
}