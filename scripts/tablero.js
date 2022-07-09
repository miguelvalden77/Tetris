
class Tablero{

    constructor(){

        this.pieza = new Piezas()
        this.w = 10
        this.h = 16
        this.panel = [
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
        [9, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 9],
        [9, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 9],
        [9, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9 ,9, 9]
    ]

    }
    dibujarPanel = ()=>{
        for(let fila = 0; fila < 16; fila ++){
            for(let col = 1; col < 10; col ++){
                if(this.panel[fila][col] !== 0){
                    contexto.fillStyle = this.pieza.colores[this.panel[fila][col]]
                    let xI = (col) * this.pieza.w
                    let yI = (fila) * this.pieza.h

                    contexto.fillRect(xI, yI, this.pieza.w, this.pieza.h)
                }
            }
        }
    }

}

