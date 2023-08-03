import { canvasProperties } from '../canvasProperties'
import { getPlayer } from './object-manager'
import { Player } from '../caracters/player'

let secondsPassed: number
let oldTimeStamp: number
let fps: number

export const gameLoop = (timestamp: number) => {
    drawBackground()
    showFps(timestamp)
    gameLogic()

    window.requestAnimationFrame(gameLoop)
}

const drawBackground = () => {
    canvasProperties.context.fillStyle = '#ccab83'
    canvasProperties.context.fillRect(
        0,
        0,
        canvasProperties.width,
        canvasProperties.height
    )
}

const showFps = (timeStamp: number) => {
    // Calculate the number of seconds passed since the last frame
    secondsPassed = (timeStamp - oldTimeStamp) / 1000
    oldTimeStamp = timeStamp

    // Calculate fps
    fps = Math.round(1 / secondsPassed)

    // Draw number to the screen
    canvasProperties.context.fillStyle = 'black'
    canvasProperties.context.font = '12px Arial'
    canvasProperties.context.fillText('FPS: ' + fps, 5, 15)
}

const gameLogic = () => {
    const player = getPlayer()
    player.run()
}
