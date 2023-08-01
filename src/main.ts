import { gameLoop } from './engine/gameloop'
import './canvas.css'
import { canvasProperties } from './canvasProperties'

const canvas = document.getElementById('game') as HTMLCanvasElement
const context = canvas.getContext('2d') as CanvasRenderingContext2D

let start = () => {
    canvas.width = canvasProperties.width
    canvas.height = canvasProperties.height
    canvasProperties.canvas = canvas
    canvasProperties.context = context
    window.requestAnimationFrame(gameLoop)
}

start()
