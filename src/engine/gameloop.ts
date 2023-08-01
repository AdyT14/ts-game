import { canvasProperties } from '../canvasProperties'

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
    console.log('Game logic running...')
}
