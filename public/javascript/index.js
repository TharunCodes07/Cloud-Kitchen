
  gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: ".main",
      scroller: "body",
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
});

gsap.from(".about img,.txt", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      scroller: "body",
      start: "top 75%",
      end: "top 70%",
      scrub: 1,
    },
});
gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop:true,
    autoplay: {
      delay:1500,
      disableOnInteraction: false,
    }
});

