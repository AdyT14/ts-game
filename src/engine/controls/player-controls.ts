import { getPlayer } from '../object-manager'

export const initPlayerControls = () => {
    document.onmousemove = (e: MouseEvent) => {
        getPlayer().rotate(e.pageX, e.pageY)
    }

    document.onkeydown = (e: KeyboardEvent) => {
        const keyName = e.key

        if (keyName === 'ArrowUp' || keyName === 'w') {
            getPlayer().upKey = true
        }

        if (keyName === 'ArrowDown' || keyName === 's') {
            getPlayer().downKey = true
        }
    }

    document.onkeyup = (e: KeyboardEvent) => {
        const keyName = e.key

        if (keyName === 'ArrowUp' || keyName === 'w') {
            getPlayer().upKey = false
        }

        if (keyName === 'ArrowDown' || keyName === 's') {
            getPlayer().downKey = false
        }
    }
}
