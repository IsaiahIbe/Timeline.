var tl = gsap.timeline();

tl.to(".box1",{
    duration: 1,
    scale: 0,
    opacity: 0,
    delay: 1,
})
.to(".box2",{
    duration: 1,
    x: -200,
})
.to(".box3",{
    duration: 1,
    x: -200,
    borderRadius: 0,
    rotate: 360,
})
.set(".box1",{
    duration: 1,
    x: 0,
})
.to(".box1",{
    duration: 1,
    scale: 1,
    opacity: 1,
})