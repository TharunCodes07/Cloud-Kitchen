document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        menuToggle.classList.toggle('open');
    });
});

gsap.to(".nav", {
    backgroundColor: "#000",
    height: "130px",
    duration: 1,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub:1
    }
});