import { DrawableSquare } from './drawableSquare'

export class Player extends DrawableSquare {
    id: string
    name: string
    speed: number

    constructor(posX: number, posY: number) {
        super(posY, posY, 25, 25, '#302eb0', true)
        this.id = 'player'
        this.name = 'Squery'
        this.speed = 5
    }
}
