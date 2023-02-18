import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { setupModel } from "./setupModel";
//import { gsap } from 'gsap'
const tl = gsap.timeline()

async function createBass(){
    let bass
    const loader = new GLTFLoader()
    const bassData = await loader.loadAsync('/models/bass.glb')
    bass = setupModel(bassData)    

    bass.tick = (delta) => {
        //bass.rotation.y += Math.PI / 24 * delta
    }
    return bass
}

export {createBass}