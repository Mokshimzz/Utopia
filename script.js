document.addEventListener("DOMContentLoaded", (event) => {

    // const intro = document.querySelector('#intro');
    // const details = document.querySelector('#details');

    // if (!(intro && details)) return;

    // const checkpoint = intro.offsetHeight;
    // let opacity;

    // details.style.bottom = (window.innerHeight - details.offsetHeight) + 'px';
    // console.log(window.innerHeight - details.offsetHeight)

    gsap.registerPlugin(ScrollTrigger)
    gsap.to("#intro", {
        scrollTrigger:{
            trigger:"#intro",
            pin:"#details",
            scrub:10,
            pinSpacing:false,
            // end:"+=100vh"
        }
    })
});

// gsap.registerPlugin(ScrollTrigger)
