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

    gsap.to("#details", {
        scrollTrigger:{
            trigger:"#details",
            pin:"#navbar",
            scrub:10,
            pinSpacing:false,
            // end:"+=100vh"
        }
    })
});

let details = document.querySelector("#details")
let contact = document.querySelector("#contact-cont")
let committees = document.querySelector("#committees-cont")
let info = document.querySelector("#info")
let rest = document.querySelector(".rest")

function viewInfo(){

    info.scrollIntoView()

    // if(!contact.classList.contains("hidden")){
    //     contact.classList.add("hidden")
    // }
    // if(!committees.classList.contains("hidden")){
    //     committees.classList.add("hidden")
    // }

    // info.classList.remove("hidden")
    // rest.classList.remove("hidden")
}
function viewCommittees(){

    committees.scrollIntoView()
    // if(!contact.classList.contains("hidden")){
    //     contact.classList.add("hidden")
    // }
    // if(!info.classList.contains("hidden")){
    //     info.classList.add("hidden")
    // }
    // if(!rest.classList.contains("hidden")){
    //     rest.classList.add("hidden")
    // }

    // committees.classList.remove("hidden")
    // details.style.height = (details.style.height - (40 * committees.offsetHeight)) + "px"
}
function viewContact(){

    contact.scrollIntoView()
    // if(!info.classList.contains("hidden")){
    //     info.classList.add("hidden")
    // }
    // if(!rest.classList.contains("hidden")){
    //     rest.classList.add("hidden")
    // }
    // if(!committees.classList.contains("hidden")){
    //     committees.classList.add("hidden")
    // }

    // contact.classList.remove("hidden")

}
// gsap.registerPlugin(ScrollTrigger)
