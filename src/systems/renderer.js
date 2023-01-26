import { sRGBEncoding, WebGLRenderer, PCFSoftShadowMap, ReinhardToneMapping } from "three";

function createRenderer() {
    const renderer = new WebGLRenderer({
        antialias: true,
        alpha: true,
        premultipliedAlpha: false,
    })
    renderer.physicallyCorrectLights = true
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.outputEncoding = sRGBEncoding
    renderer.toneMapping = ReinhardToneMapping
    renderer.toneMappingExposure = 2.3
    return renderer
}

export {createRenderer}