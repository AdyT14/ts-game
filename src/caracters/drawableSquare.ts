import { canvasProperties } from '../canvasProperties'

export class DrawableSquare {
    posX: number
    posY: number
    width: number
    height: number
    color: string
    shouldDraw: boolean
    context: CanvasRenderingContext2D

    constructor(
        posX: number,
        posY: number,
        width: number,
        height: number,
        color: string,
        shouldDraw: boolean
    ) {
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height
        this.color = color
        this.shouldDraw = shouldDraw
        this.context = canvasProperties.context
    }

    draw = () => {
        if (this.shouldDraw) {
            this.context.fillStyle = this.color
            this.context.fillRect(this.posX, this.posY, this.width, this.height)
        }
    }
}
