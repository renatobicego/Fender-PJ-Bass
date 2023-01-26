import { Scene, CubeTextureLoader } from 'three'

function createScene() {
    const scene = new Scene()
    scene.background = new CubeTextureLoader()
                            .setPath('/')
                            .load([
                                'green.png',
                                'green.png',
                                'green.png',
                                'green.png',
                                'green.png',
                                'green.png',
                            ])
    return scene
}

export {createScene}