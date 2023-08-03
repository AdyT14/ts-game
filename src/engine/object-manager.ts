import { Player, PLAYER_HEIGHT, PLAYER_WIDTH } from '../caracters/player'
import { canvasProperties } from '../canvasProperties'

let PLAYER: Player = undefined

export const getPlayer = () => {
    if (PLAYER === undefined) {
        PLAYER = new Player(
            canvasProperties.width / 2 - PLAYER_WIDTH / 2,
            canvasProperties.height / 2 - PLAYER_HEIGHT / 2
        )
    }
    return PLAYER
}
