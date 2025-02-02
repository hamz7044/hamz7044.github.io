let cards = document.querySelectorAll('.review');
cards.forEach(card => {
  card.onmousemove = function(e){
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;

    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');
  }
})

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {

  const posX = e.clientX
  const posY = e.clientY

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  //cursorOutline.style.left = `${posX}px`;
  //cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`,
  }, {duration:500, fill: "forwards"});

});

window.addEventListener("mousedown", function () {

  cursorDot.classList.add("clicked");
  cursorOutline.classList.add("clicked");

  setTimeout(() => {
    cursorDot.classList.remove("clicked");
    cursorOutline.classList.remove("clicked");
  }, 300);
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const film = [
    { id: "#film-1", endTranslateX: -2000, rotate: 15 },
    { id: "#film-2", endTranslateX: -1000, rotate: -15 },
    { id: "#film-3", endTranslateX: -2000, rotate: 15 },
    { id: "#film-4", endTranslateX: -1000, rotate: -15 },
    { id: "#film-5", endTranslateX: -2000, rotate: 15 },
    { id: "#film-6", endTranslateX: -1000, rotate: -15 },
    { id: "#film-7", endTranslateX: -2000, rotate: 15 },
    { id: "#film-8", endTranslateX: -1000, rotate: -15 },
    { id: "#film-9", endTranslateX: -2000, rotate: 15 },
    { id: "#film-10", endTranslateX: -1000, rotate: -15 },
  ];

  ScrollTrigger.create({
    trigger: ".wrapper",
    start: "top top",
    end: "+=900vh",
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      gsap.to(".wrapper", {
        x: `${-400 * self.progress}vw`,
        duration: 0.9,
        ease: "power3.out",
      });
    },
  });

  film.forEach((film) => {
   ScrollTrigger.create({
    trigger: "film.id",
    start: "top top",
    end: "+=1200vh",
    scrub: 1,
    onUpdate: (self) => {
     gsap.to(film.id, {
      x: `${film.endTranslateX * self.progress}px`,
      rotate: `${film.rotate * self.progress * 2}`,
      duration: 0.9,
      ease: "power3.out",
     });
    },
   });
  });
});