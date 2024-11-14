gsap.to(".hero-text span", {
    opacity: 1,
    duration: 2,
    ease: "circ.inOut",
    stagger: 0.2
});

gsap.from(".hero-image", {
    opacity: 0,
    filter: "blur(10px)", 
    duration: 2.5,  
    ease: "power2.out" 
});

const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {
    gsap.to(button, { boxShadow: "0 0 15px rgba(52, 152, 219, 0.5)", duration: 0.6 });
  });
  
  button.addEventListener("mouseleave", () => {
    gsap.to(button, { boxShadow: "0 0 5px rgba(0, 0, 0, 0)", duration: 1.6 });
  });

  const button1 = document.querySelector(".btn1");

button1.addEventListener("mouseenter", () => {
    gsap.to(button1, { boxShadow: "0 0 25px rgba(52, 152, 219, 0.6)", duration: 0.6 });
  });
  
  button1.addEventListener("mouseleave", () => {
    gsap.to(button1, { boxShadow: "0 0 5px rgba(0, 0, 0, 0)", duration: 1.6 });
  });


  const buton = document.querySelector(".buton");
  const buttonText = document.querySelector(".buton .text");

//   buton.addEventListener("mouseenter", () => {
//     gsap.to(buttonText, { x: -5, duration: 0.2, ease: "power2.out" });
//   });
  
//   buton.addEventListener("mouseleave", () => {
//     gsap.to(buttonText, { x: 0, duration: 0.2, ease: "power2.out" });
//   });


    gsap.registerPlugin(ScrollTrigger);

      gsap.from(".project-section", {
        opacity: 0,                  // Start fully transparent
        y: 50,                       // Start slightly below its final position
        duration: 1.2,               // Duration of the animation
        ease: "power3.out",          // Smooth easing
        scrollTrigger: {
            trigger: ".project-section", // Element that triggers the animation
            start: "top 80%",            // Start animation when the top of .project-section is at 80% of the viewport height
            end: "top 50%",              // End the trigger when .project-section is at 50%
            scrub: 1, 
        }
    });
 