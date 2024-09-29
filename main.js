const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  reset: true,
  opacity: 0,
  scale: 0.9,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
};

const sr = ScrollReveal();

sr.reveal(".header__container img", {
  ...scrollRevealOption,
  viewFactor: 0.2,
});
sr.reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
  viewFactor: 0.2,
});
sr.reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
  viewFactor: 0.2,
});
sr.reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
  viewFactor: 0.2,
});

sr.reveal(".project__card", {
  ...scrollRevealOption,
  interval: 500,
  viewFactor: 0.3,
});

sr.reveal(".experience__list li", {
  ...scrollRevealOption,
  interval: 500,
  viewFactor: 0.3,
});

sr.reveal(".footer__container h2", {
  ...scrollRevealOption,
  viewFactor: 0.2,
});
sr.reveal(".footer__container p", {
  ...scrollRevealOption,
  delay: 500,
  viewFactor: 0.2,
});
sr.reveal(".footer__container .mail__to", {
  ...scrollRevealOption,
  delay: 1000,
  viewFactor: 0.2,
});
sr.reveal(".footer__socials", {
  ...scrollRevealOption,
  delay: 1500,
  viewFactor: 0.2,
});