import { canvasProperties } from '../canvasProperties'

export abstract class DrawableImage {
    posX: number
    posY: number
    width: number
    height: number
    color: string
    shouldDraw: boolean
    hasCollision: boolean
    image: CanvasImageSource
    context: CanvasRenderingContext2D

    constructor(
        posX: number,
        posY: number,
        width: number,
        height: number,
        shouldDraw: boolean,
        hasCollision: boolean,
        image: CanvasImageSource,
    ) {
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height
        this.shouldDraw = shouldDraw
        this.hasCollision = hasCollision
        this.image = image
        this.context = canvasProperties.context
    }

    draw() {
        if (this.shouldDraw) {
            this.context.fillStyle = this.color
            this.context.drawImage(this.image, 0, 0, this.width / 2, this.height / 2, this.posX, this.posY, this.height, this.width)
        }
    }

    abstract run(): void
}
