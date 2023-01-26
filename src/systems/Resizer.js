const setSize = (container, camera, renderer) => {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()

    const pixelRatio = window.devicePixelRatio;
    renderer.setSize(container.clientWidth * pixelRatio, container.clientHeight * pixelRatio, false);
}


class Resizer {
    constructor(container, camera, renderer){
        setSize(container, camera, renderer)
        window.addEventListener('resize', () => {
            setSize(container, camera, renderer)
            this.onResize()
        })
    }
    onResize(){}
}

export { Resizer }