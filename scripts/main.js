const canvas = document.getElementById("canvas")
const contexto = canvas.getContext("2d")
const FPS = 100
const startBtn = document.getElementById("start-button")
const startScreen = document.getElementById("start")

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
    [9, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]
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
                    contexto.fillStyle = colores[this.tipoPieza]
                    const x0 = (this.x + col - 1) * anchoPieza
                    const y0 = (this.y + fila - margen) * altoPieza
                    contexto.fillRect(x0, y0, anchoPieza, altoPieza)
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
            this.y ++
            this.aumentoDist = 0
        }
    }

    this.rotar = function(){
        if(this.angulo < 3){
            this.angulo ++
        } else{
            this.angulo = 0
        }
    }

    this.abajo = ()=>{
        this.y ++
    }

    this.izq = ()=>{
        this.x --
    }

    this.der = ()=>{
        this.x ++
    }

    this.nueva()
}


// Funciones
const limpiarCanvas = ()=>{
    contexto.fillStyle = "gray"
    contexto.fillRect(0, 0, canvas.width, canvas.height)
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

    limpiarCanvas()
    dibujarTablero()
    pieza.dibujar()
    pieza.estaAbajo()

}



// AddEventListeners
startBtn.addEventListener("click", ()=>{
    startScreen.style.display = "none"
    canvas.style.display = "block"

    addEventListener("load", inicio())

})

