let scrollY = window.scrollY
let currentSection = 0
let newSection
let onAnimation = false
let bass

gsap.registerPlugin(ScrollTrigger)

class ScrollAnimation{
    constructor(camera, container){
        window.addEventListener('scroll', () =>{
            scrollY = window.scrollY
            if(onAnimation === false){
                switch (true) {
                    case scrollY > container.clientHeight * 0.07 && scrollY < container.clientHeight * 0.1:
                        newSection = 1
                        break;
                    case scrollY < container.clientHeight * 1.05 && scrollY > container.clientHeight * 0.2:
                        newSection = 0
                        break 
                    case scrollY > container.clientHeight * 1.2 && scrollY < container.clientHeight * 1.3:
                        newSection = 2
                        break      
                    case scrollY < container.clientHeight * 2 && scrollY > container.clientHeight * 1.9:
                        newSection = 1
                        break 
                    case scrollY > container.clientHeight * 2.2 && scrollY < container.clientHeight * 2.3:
                        newSection = 3
                        break      
                    case scrollY < container.clientHeight * 3.2 && scrollY > container.clientHeight * 2.9:
                        newSection = 2
                        break                                    
                }
            }


            if(newSection != currentSection)
            {
                currentSection = newSection 
                switch (currentSection) {
                    case 0:
                        firstAnimation(camera)
                        break
                    case 1:
                        secondAnimation(camera)
                        break;
                    case 2:
                        thirdAnimation(camera)
                        break
                    case 3:
                        fourthAnimation(camera)
                        break
                }
            }
            this.onChange()
        })
    }

    onChange(){}

    addBass(obj){
        bass = obj
    }
}

const scrollTo = (element) => {
    gsap.to(window, {
        scrollTo: element,
        duration: 3,
        ease: "power2.out",
        onComplete: () => onAnimation = false
    })
}

const fadeInDiv = (element) => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            toggleActions: "play none none none"
        }, // start the animation when ".box" enters the viewport (once)
        opacity: 1,
        duration: 3
    });
}

const firstAnimation = (camera) => {
    onAnimation = true
    scrollTo('header')

    gsap.to(camera.position, {
        x: 0,
        y: -1.5,
        z: 13,
        duration: 3,
        onComplete: () => {
            onAnimation = false
        }
    })
}

const secondAnimation = (camera) => {
    onAnimation = true
    scrollTo('.segundo')
    fadeInDiv('.segundo')
    gsap.to(camera.position, {
        x: -6,
        y: -1,
        z: 0,
        duration: 3,
    });
    gsap.to(bass.position, {
        z: -2,
        y: 1.9,
        x: 4,
        duration: 3,
    });
}

const thirdAnimation = (camera) => {
    onAnimation = true
    scrollTo('.tercero')
    fadeInDiv('.tercero')
    gsap.to(camera.position, {
        x: 5,
        y: 1,
        z: 10,
        duration: 3,
        onComplete: () => {
            onAnimation = false
        }
    })
    gsap.to(bass.position, {
        x: 6.4,
        y: 2.5,
        z: 6,
        duration: 3,
    });
    gsap.to(bass.rotation, {
        x: 3 * Math.PI / 2.4,
        y: -0.3,
        z: -0.5,
        duration: 3,
    });
}

const fourthAnimation = (camera) => {
    onAnimation = true
    scrollTo('.cuarto')
    fadeInDiv('.cuarto')
    gsap.to(camera.position, {
        x: 0,
        y: 2.5,
        z: 10,
        duration: 3,
    })
    gsap.to(bass.position, {
        x: 0,
        y: 1,
        z: 0,
        duration: 3,
    });
    gsap.to(bass.rotation, {
        x: 3 * Math.PI / 2,
        y: 0,
        z: 0,
        duration: 3,
    });
}

export {ScrollAnimation}