gsap.to(".hero-text span", {
    opacity: 1,
    duration: 2,
    ease: "circ.inOut",
    stagger: 0.2
});


gsap.from(".hero-paragraph", {
    opacity: 0, 
    duration: 12,
    ease: "power2.out", 
    delay: 0.2
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

