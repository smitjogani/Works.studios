function loading() {

    var tl = gsap.timeline()

    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    })

    tl.from("#yellow2 ", {
        top: "100%",
        delay: 0.6,
        duration: 0.7,
        ease: "expo.out"
    }, "anim")

    tl.to("#loader h1", {
        color: "black",
        delay: 0.6,
        duration: 0.7
    }, "anim")

    
    tl.to("#loader", {
        opacity: 0
    })

    tl.to("#loader", {
        display: "none"
    })
}
loading()

gsap.to("#back i, #back h3", {
    y: -30,
    repeat: -1,
    duration: 0.7,
    yoyo: true
})

document.querySelector("#back h3, #back i").addEventListener("click",() => {
    scroll.scrollTo(0)
})

document.querySelector("#footer-nav #icon").addEventListener("click",() => {
    scroll.scrollTo(720)
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url('${bgimg}')`
    })
})
