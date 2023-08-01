import { Player } from '../caracters/player'

let PLAYER: Player = undefined

export const getPlayer = () => {
    if (PLAYER === undefined) {
        PLAYER = new Player(50, 50)
    }
    return PLAYER
}
