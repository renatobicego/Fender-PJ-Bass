import { gsap } from 'gsap'

const tl = gsap.timeline()

function setupModel(data){
    const model = data.scene.children[0]
    model.scale.set(10, 10, 10)
    model.rotation.set(3 * Math.PI / 2.4, -0.3, -0.5)
    model.position.set(3, 1.5, 0)
    data.scene.traverse(mesh => {
        if(mesh.isMesh){
            mesh.castShadow = true
            mesh.receiveShadow = true
        }
    })
    return model
}

export {setupModel}