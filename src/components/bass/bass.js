import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { setupModel } from "./setupModel";

async function createBass(){
    let bass
    const loader = new GLTFLoader()
    const bassData = await loader.loadAsync('/models/bass.glb')
    bass = setupModel(bassData)    

    bass.tick = (delta) => {
    }
    return bass
}

export {createBass}