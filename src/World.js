import { createCamera } from "./components/camera"
import { createLight } from "./components/light"
import { createScene } from "./components/scene"
import { createRenderer } from "./systems/renderer"
import { Resizer } from "./systems/Resizer"
import { createControls } from "./systems/controls"
import { createBass } from "./components/bass/bass.js"
import { createFloor } from "./components/floor"
import { ScrollAnimation } from "./systems/ScrollAnimation"
import { Loop } from "./systems/Loop"
import { disableScroll, enableScroll } from "./script"

let camera, scene, renderer, resizer, controls, loop
let renderRequested = false;
const openGalleryBtn = document.querySelector('.open3dgallery')
const closeGalleryBtn = document.querySelector('.close3dgallery')

class World {
    constructor(container){
        renderer = createRenderer()
        scene = createScene(renderer)
        camera = createCamera()
        scroll = new ScrollAnimation(camera, container)
        container.append(renderer.domElement)

        controls = createControls(camera, renderer.domElement)

        const {light1, light2, light3} = createLight()
        scene.add(light1, light2, light3)

        resizer = new Resizer(container, camera, renderer)
        loop = new Loop(camera, scene, renderer)
        loop.updatables.push(controls)

        /*resizer.onResize = () => {
            this.render();
        };
        scroll.onChange = () => {
            this.render()
        }

        controls.addEventListener('change', () => {
            if (!renderRequested) {
                renderRequested = true;
                requestAnimationFrame(this.render);
            }
        });*/
    }

    async init() {
        const bass = await createBass()
        scroll.addBass(bass)
        loop.updatables.push(bass)
        
        const floor = createFloor()
        scene.add(floor, bass)
        
    }

    render(){
        //renderRequested = undefined;
        //controls.update();
        renderer.render(scene, camera)
    }
    // Start loop function
    start() {
        loop.start();
        camera.animate()
      }

    // Stop loop
    stop() {
        loop.stop();
    }

}

openGalleryBtn.addEventListener('click', () => {
    openGalleryBtn.classList.toggle('hidden')
    closeGalleryBtn.classList.toggle('hidden')

    disableScroll(window.scrollY)

    document.querySelector('#scene-container').style.zIndex = 3

    controls.viewGallery()
})
closeGalleryBtn.addEventListener('click', () => {
    openGalleryBtn.classList.toggle('hidden')
    closeGalleryBtn.classList.toggle('hidden')

    enableScroll()

    document.querySelector('#scene-container').style.zIndex = -2

    controls.closeGallery()
})

export {World}