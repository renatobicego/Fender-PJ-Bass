import { PerspectiveCamera } from "three"

const tl = new gsap.timeline()

function createCamera() {
    const camera = new PerspectiveCamera(35, 1, 0.01, 1000)
    camera.position.set(-10, -1.5, -5)
    camera.animate = () => {
            tl.to(camera.position, {
            x: 0,
            y: -1.5,
            z: 13,
            duration: 8
        })
    }
    return camera
}

export {createCamera}