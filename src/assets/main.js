gsap.to(".hero-text span", {
    opacity: 1,
    duration: 2,
    ease: "circ.inOut",
    stagger: 0.2
});


gsap.from(".hero-paragraph", {
    opacity: 0,    // Fade to full opacity
    duration: 12,   // Animation duration in seconds
    ease: "power2.out",  // Smooth easing effect
    delay: 0.2
});


gsap.from(".hero-image", {
    opacity: 0,             // Fade in effect
    filter: "blur(10px)",   // Start with blur
    duration: 1.5,          // Adjust duration for effect timing
    ease: "power2.out"      // Smooth easing
});
