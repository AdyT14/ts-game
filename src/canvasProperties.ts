export const canvasProperties: CanvasProperties = {
    width: 500,
    height: 500,
    canvas: undefined,
    context: undefined,
}

export interface CanvasProperties {
    width: number
    height: number
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
}
