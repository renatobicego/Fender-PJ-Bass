import './style.css'
import { World } from './World'

async function main() {
    const container = document.querySelector('#scene-container')
    const world = new World(container)

    await world.init()
    world.start()    
    disableScroll(0)
    setTimeout(enableScroll, 9000)

}

function disableScroll(y_coord) {
    window.scrollTo(0, y_coord)
    window.onscroll = function() {
        window.scrollTo(0, y_coord)
    }
    document.body.style.overflow = "hidden"
}
  
function enableScroll() {
    window.onscroll = function() {};
    document.body.style.overflow = "auto"
}

main().catch((err) => {
    console.error(err);
  });

export {disableScroll, enableScroll}