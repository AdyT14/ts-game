import { getPlayer } from '../object-manager'

export const initPlayerControls = () => {
    document.onmousemove = (e: MouseEvent) => {
        getPlayer().rotate(e.pageX, e.pageY)
    }
}
