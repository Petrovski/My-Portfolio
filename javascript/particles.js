
// Particles background

particlesJS("particles-js", {
    particles: {
        number: {
            value: 142,
            density: { enable: true, value_area: 947.0220103698913 }
        },
        color: { value: "#ffffff" },
        shape: {
            type: "polygon",
            stroke: { width: 2, color: "#000000" },
            polygon: { nb_sides: 6 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 2.9,
            random: true,
            anim: { enable: false, speed: 0, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3.204794372381079,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 6730.068182000267,
                rotateY: 8412.585227500333
            }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
                distance: 219.1113816189898,
                size: 6,
                duration: 2,
                opacity: 0.340839926962873,
                speed: 3
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});