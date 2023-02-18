import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas)
    //Not move obj with right click
    controls.enabled = false
    controls.minDistance = 3
    controls.target.set(1, 0.5, 0)
    controls.viewGallery = () => controls.enabled = true
    controls.closeGallery = () => controls.enabled = true

    //Inertia
    controls.enableDamping = true;
    controls.dampingFactor = 0.03
    controls.maxPolarAngle = Math.PI / 1.8
    controls.maxDistance = 15
    controls.tick = () => controls.update();

    return controls
}

export {createControls}