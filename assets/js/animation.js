
// GSAP plugin register
gsap.registerPlugin(ScrollTrigger);

/* ============================
   1. Service Cards Animation
=============================== */
gsap.from(".herosection", {
  scrollTrigger: {
    trigger: ".herosection",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});


/* ============================
   2. Why Choose Us Boxes
=============================== */
gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});
gsap.from(".services", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});
gsap.from(".whychose", {
  scrollTrigger: {
    trigger: ".whychose",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});
gsap.to(".servicescolor", {
  scrollTrigger: {
    trigger: ".servicescolor",
    start: "top 75%",
    toggleActions: "play none none reverse",

  },
  backgroundColor: "#6364DB",
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",

    
});
gsap.to(".servicestextcolor", {
  scrollTrigger: {
    trigger: ".servicescolor",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
  color: "#ffffffff",
  ease: "power3.out",
  
});







