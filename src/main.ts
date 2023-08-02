import { gameLoop } from './engine/gameloop'
import './canvas.css'
import { canvasProperties } from './canvasProperties'
import { initSprites } from './caracters/sprites/sprites-properties'
import { initPlayerControls } from './engine/controls/player-controls'

const canvas = document.getElementById('game') as HTMLCanvasElement
const context = canvas.getContext('2d') as CanvasRenderingContext2D

let start = () => {
    canvas.width = canvasProperties.width
    canvas.height = canvasProperties.height
    canvasProperties.canvas = canvas
    canvasProperties.context = context
    initSprites()
    initPlayerControls()
    window.requestAnimationFrame(gameLoop)
}

start()
