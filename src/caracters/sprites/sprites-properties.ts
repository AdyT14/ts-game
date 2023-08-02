export const initSprites = () => {
    SPRITE_PROPERTIES.playerSpriteSheet = new Image()
    SPRITE_PROPERTIES.playerSpriteSheet.src = './PlayerShip.png'
}

export const SPRITE_PROPERTIES: PlayerSprites = {
    playerSpriteSheet: undefined,
}

interface PlayerSprites {
    playerSpriteSheet: HTMLImageElement
}
