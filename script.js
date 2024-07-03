document.addEventListener("DOMContentLoaded", (event) => {

    let nav = document.querySelector("#fixed-navbar")
    gsap.registerPlugin(ScrollTrigger)
    gsap.to("#intro", {
        scrollTrigger:{
            trigger:"#intro",
            pin:"#details",
            scrub:10,
            pinSpacing:false,
            onLeave:()=>{nav.classList.remove("hidden")
        // nav.classList.add(".nav-tran")
    },
            onLeaveBack:()=>{nav.classList.remove("hidden")},
            onEnter:()=>{nav.classList.add("hidden")},
            onEnterBack:()=>{nav.classList.add("hidden")}
            // end:"+=100vh"
        }
    })

});

// import Typewriter from 'typewriter-effect/dist/core';
var app = document.getElementById('typew');
var typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
    // cursorClassName:"cur"
});
console.log(typewriter)

typewriter
  .typeString('Utopia MUN 2024')
  .pauseFor(200)
  .deleteChars('Utopia MUN 2024'.length - 1)
  .typeString('MUN 2024')
  .pauseFor(400)
  .start();

let nav = document.querySelector("#intro")
let comp = window.getComputedStyle(nav)
// document.addEventListener("scroll", (e) => {
//     let scroll = this.scrollY;
//     console.log(scroll,   parseFloat(comp.getPropertyValue("height")),parseFloat(comp.getPropertyValue("height")) + parseFloat(comp.getPropertyValue("padding-bottom")))
// })
let contact = document.querySelector("#contact-cont")
let committees = document.querySelector("#committees-cont")
let info = document.querySelector("#info")
let rest = document.querySelector(".rest")

function skip(){
    window.scroll(0, parseFloat(comp.getPropertyValue("height")) + 2* parseFloat(comp.getPropertyValue("padding-bottom")))
}

function viewInfo(){
    window.scroll(0, parseFloat(comp.getPropertyValue("height")) + 2* parseFloat(comp.getPropertyValue("padding-bottom")))
    // info.scrollIntoView(true)
}
function viewCommittees(){
    window.scroll(0, parseFloat(comp.getPropertyValue("height")) + 2* parseFloat(comp.getPropertyValue("padding-bottom")) + committees.offsetTop)
    // committees.scrollIntoView(true)
}
function viewContact(){
    window.scroll(0, parseFloat(comp.getPropertyValue("height")) + 2* parseFloat(comp.getPropertyValue("padding-bottom")) + contact.offsetTop)
    // contact.scrollIntoView(true)
}

var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "<span style='color: rgba(255, 255, 255, 1);'>D </span>" + hours + "<span style='color: rgba(255, 255, 255, 1);'>H </span>"
  + minutes + "<span style='color: rgba(255, 255, 255, 1);'>M </span>" + seconds + "<span style='color: rgba(255, 255, 255, 1);'>S </span>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);