export const canvasProperties: CanvasProperties = {
    width: 512,
    height: 512,
    canvas: undefined,
    context: undefined,
}

export interface CanvasProperties {
    width: number
    height: number
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
}
