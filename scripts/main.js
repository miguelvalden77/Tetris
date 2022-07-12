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
let score = 0
let correrJuego = true

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

const margen = 4
const anchoPieza = 40
const altoPieza = 40
let pieza
const colores = ["red", "green", "blue", "brown", "orange", "pink", "purple"]

// Función creadora
const ObjetoPieza = function(){

    this.x = 0
    this.y = 0
    this.angulo = 1
    this.tipoPieza = 1
    this.dist = 50
    this.aumentoDist = 0

    this.dibujar = function(){
        for(fila = 0; fila < 4; fila ++){
            for(col = 0; col < 4; col ++){
                if(piezas[this.tipoPieza][this.angulo][fila][col] !== 0){
                    contexto.fillStyle = colores[this.tipoPieza + 1]
                    const x0 = (this.x + col - 1) * anchoPieza
                    const y0 = (this.y + fila - margen) * altoPieza
                    contexto.fillRect(x0, y0, anchoPieza, altoPieza)
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
            for(col = 1; col < 10 + 1; col ++){
              tablero[fila][col] = 0
            }
          }
        }
      }
    

    this.nueva = function(){
        const posicion = Math.floor(Math.random()*7)
        this.tipoPieza = posicion
        this.x = 4
        this.y = 0
    }

    this.estaAbajo = function(){
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

    this.rotar = function(){
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

    this.colision = function(nuevoAngulo, filaNueva, colNueva){
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

    this.dibujarEnPanel = function(){
      for(let fila = 0; fila < 4; fila ++){
        for(let col = 0; col < 4; col ++){
          if(piezas[this.tipoPieza][this.angulo][fila][col] !== 0){
            tablero[this.y + fila][this.x + col] = piezas[this.tipoPieza][this.angulo][fila][col]
          }
        }
      }
    }

    this.gameOver = function(){
      let gameOver = false
      for(let fila = 1; fila < 10 + 1; fila ++){
        if(tablero[2][fila] !== 0){
          gameOver = true
        }
      }
      return gameOver
    }

    this.nueva()
}


// Funciones

const ganar = ()=>{
  if(score === 1){
    canvasContainer.style.display = "none"
    victoria.style.display = "block"
    correrJuego = false
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
    contexto.fillStyle = "gray"
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

const inicio = ()=>{

    listeners()
    pieza = new ObjetoPieza()

    setInterval(gameLoop, 1000 / FPS)

}

const gameLoop = ()=>{

  if(correrJuego === true){
    limpiarCanvas()
    pieza.estaAbajo()
    dibujarTablero()
    pieza.dibujar()
    ganar()
  }

}


// AddEventListeners
startBtn.addEventListener("click", ()=>{
    score = 0
    startScreen.style.display = "none"
    canvasContainer.style.display = "block"
    FPS = 50

    addEventListener("load", inicio())

})

pause.addEventListener("click", ()=>{
  correrJuego = false
})

continuar.addEventListener("click", ()=>{
  correrJuego = true
})


resetButton.addEventListener("click", ()=>{
    startScreen.style.display = "block"
    gameOverScreen.style.display = "none"
})

restart.addEventListener("click", ()=>{
  victoria.style.display = "none"
  finish.style.display = "block"
})



