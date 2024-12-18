let menu = document.querySelector("#nav i");
let cancle = document.querySelector("#full i");

let tl = gsap.timeline();

tl.to("#full", {
    right: 0,
});

tl.from("#full h4", {
    x: 150,
    duration: 0.6,
    stagger: 0.25,
    opacity: 0,
})

tl.from("#full i", {
    opacity: 0
})

tl.pause();

menu.addEventListener("click", function(dets){
    tl.play();
})

cancle.addEventListener("click", function(dets){
    tl.reverse();
})