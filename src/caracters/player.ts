import { DrawableImage } from './drawable-image'
import { SPRITE_PROPERTIES } from './sprites/sprites-properties'

export const PLAYER_WIDTH = 32
export const PLAYER_HEIGHT = 32

export class Player extends DrawableImage {
    id: string
    name: string
    speed: number
    rotation: number
    drag: number
    upKey: boolean
    downKey: boolean
    leftKey: boolean
    rightKey: boolean
    rotationSpeed: number
    lastReadRotation: number

    constructor(posX: number, posY: number) {
        super(
            posY,
            posY,
            PLAYER_WIDTH,
            PLAYER_HEIGHT,
            true,
            true,
            SPRITE_PROPERTIES.playerSpriteSheet,
        )
        this.id = 'player'
        this.name = 'Squery'
        this.speed = 0
        this.rotation = 0
        this.drag = 0.3
        this.rotationSpeed = 0.05
        this.lastReadRotation = 0
    }

    rotate(cursorX: number, cursorY: number) {
        const centerX = this.posX + this.width / 2
        const centerY = this.posY + this.height / 2
        this.lastReadRotation =  Math.atan2(cursorX - centerX, -(cursorY - centerY))
    }

    draw() {
        this.context.save()
        const widthTranslate = this.posX + this.width / 2
        const heightTranslate = this.posY + this.height / 2
        this.context.translate(widthTranslate, heightTranslate)
        this.context.rotate(this.rotation)
        this.context.translate(-widthTranslate, -heightTranslate)
        super.draw()
        this.context.restore()
    }

    move() {
        this.moveUp()
        this.moveDown()

        this.posX += Math.sin(this.rotation) * this.speed
        this.posY -= Math.cos(this.rotation) * this.speed
        if (this.speed - this.drag > 0) {
            this.speed -= this.drag
        } else if (this.speed + this.drag < 0) {
            this.speed += this.drag
        } else {
            this.speed = 0
        }

        // Rotation does not work well, because rotation jumps between 3 and -2 down area
        if(this.lastReadRotation > this.rotation + this.rotationSpeed){
            this.rotation += this.rotationSpeed
        }else if (this.lastReadRotation < this.rotation - this.rotationSpeed){
            this.rotation -= this.rotationSpeed
        }else {
            this.rotation = this.lastReadRotation
        }
        console.log(this.lastReadRotation)
    }

    moveUp() {
        if (this.upKey && this.speed <= 10) {
            this.speed += 0.5
        }
    }

    moveDown() {
        if (this.downKey && this.speed >= -10) {
            this.speed -= 0.5
        }
    }

    run() {
        this.draw()
        this.move()
    }
}
