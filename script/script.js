const abouttext = new SplitType('h1.abouthead', {types: "chars"})
const about = new SplitType("h1.aboutext", {types: "charss"})
const chars = abouttext.chars
const charss = about.chars

document.addEventListener("DOMContentLoaded", function(){
    window.onload = function() {
        var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
        shadowRoot.querySelector('#logo').remove();
    }
    
})

gsap.registerPlugin(ScrollTrigger)
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".abouthead",
        start: "60% top",
        end: "10% bottom",

    }
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".abouthead",
        start: "60% top",
        end: "10% bottom",
     
    }   
})

tl.fromTo(  
    ".abouthead",
    {
        y:100,
        opacity: 0
    },
    {
        y:0,
        opacity: 1,
        duration: 2.5,
        ease:"power4.out",
    }
)

tl2.fromTo(  
    ".aboutext",
    {
        y:100,
        opacity: 0
    },
    {
        y:0,
        opacity: 1,
        duration: 2.5,
        ease:"power4.out",
    
    }
)


// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console


// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
