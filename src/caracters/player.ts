import { DrawableImage } from './drawable-image'
import { SPRITE_PROPERTIES } from './sprites/sprites-properties'

export class Player extends DrawableImage {
    id: string
    name: string
    speed: number
    rotation: number

    constructor(posX: number, posY: number) {
        super(
            posY,
            posY,
            32,
            32,
            true,
            true,
            SPRITE_PROPERTIES.playerSpriteSheet
        )
        this.id = 'player'
        this.name = 'Squery'
        this.speed = 5
        this.rotation = 0;
    }

    rotate(cursorX: number, cursorY: number) {
        const centerX = this.posX + this.width / 2
        const centerY = this.posY + this.height / 2
        this.rotation = Math.atan2(cursorX - centerX, - (cursorY - centerY))
    }

    draw() {
        this.context.save()
        const widthTranslate = this.posX + this.width / 2
        const heightTranslate = this.posY + this.height / 2
        this.context.translate(widthTranslate, heightTranslate)
        this.context.rotate(this.rotation)
        this.context.translate(-widthTranslate,-heightTranslate)
        super.draw()
        this.context.restore()
    }
}
