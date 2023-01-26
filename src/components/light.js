import { SpotLight} from "three"

function createLight(){
    const light1 = new SpotLight('white', 250)
    light1.castShadow = true    
    const light2 = new SpotLight('white', 80)
    light2.castShadow = true
    const light3 = new SpotLight('white', 80)
    light3.castShadow = true
    light1.shadow.mapSize.width = 1024; // default
    light1.shadow.mapSize.height = 1024; // default
    light1.shadow.bias = -0.0001

    light1.position.set(35, 35, 30)
    light2.position.set(-35, 35, -45)
    light3.position.set(-35, 35, 35)
    
    return {light1, light2, light3}
}

export {createLight}