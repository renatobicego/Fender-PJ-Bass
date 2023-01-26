import { MixOperation, Mesh, MeshPhongMaterial, PlaneGeometry } from "three";

function createFloor(){
    const geometry = new PlaneGeometry(50, 50, 32, 32)
    const material = new MeshPhongMaterial({
        color: '#9EE6B7', 
        reflectivity: 0, 
        shininess: 1,
        combine: MixOperation,
        specular: 'black'
    })
    const mesh = new Mesh(geometry, material)
    mesh.rotateX(-Math.PI / 2)
    mesh.position.set(0, -2, 0)
    mesh.receiveShadow = true
    mesh.castShadow = false
    return mesh
}
export {createFloor}