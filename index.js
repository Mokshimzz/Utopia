document.addEventListener("DOMContentLoaded", (event) => {

    let nav = document.querySelector("#fixed-navbar")
    gsap.registerPlugin(ScrollTrigger)
    gsap.to("#intro", {
        scrollTrigger:{
            trigger:"#intro",
            pin:"#details",
            scrub:3,
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

let themeico = document.getElementById("theme-ico")
function change(){

    if (document.body.classList.contains("light")){
        document.body.style.setProperty('--black', 'rgb(83, 249, 0)');
        document.body.style.setProperty('--white', 'black');
        document.body.style.setProperty('--bg', 'black');
        document.body.style.setProperty('--pcolor', 'rgb(249, 241, 0)');
        document.body.style.setProperty('--link', 'rgb(178, 249, 0)');
        document.body.style.setProperty('--hovcolor', 'black');
        
        document.body.style.setProperty('--shadow1', 'rgba(92, 95, 84, 0.25)');
        document.body.style.setProperty('--shadow2', 'rgba(92, 95, 84, 0.12)');
        document.body.style.setProperty('--shadow3', 'rgba(92, 95, 84, 0.17)');
        document.body.style.setProperty('--shadow4', 'rgba(92, 95, 84, 0.09)');
        document.body.classList.remove("light")
        document.body.classList.add("dark")
        themeico.classList.add("fa-moon")
        themeico.classList.remove("fa-sun")
    } else {
        document.body.style.setProperty('--shadow1', 'rgba(0, 0, 0, 0.25)');
        document.body.style.setProperty('--shadow2', 'rgba(0, 0, 0, 0.12)');
        document.body.style.setProperty('--shadow3', 'rgba(0, 0, 0, 0.17)');
        document.body.style.setProperty('--shadow4', 'rgba(0, 0, 0, 0.09)');
        document.body.style.setProperty('--black', 'black');
        document.body.style.setProperty('--white', 'white');
        document.body.style.setProperty('--bg', '#f2f1e2');
        document.body.style.setProperty('--pcolor', 'hsla(76, 6%, 35%, 0.6)');
        document.body.style.setProperty('--link', 'rgb(70, 1, 1)');
        document.body.style.setProperty('--hovcolor', 'rgb(252, 217, 217)');
        document.body.classList.remove("dark")
        document.body.classList.add("light")
        themeico.classList.add("fa-sun")
        themeico.classList.remove("fa-moon")

    }

}

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

var countDownDate = new Date("Jul 26, 2024 09:30:00").getTime();

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
