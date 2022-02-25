const primaryNav = document.querySelector(".nav-links");
const navToggle = document.querySelector(".hamburger");

navToggle.addEventListener("click", () => {
  if (primaryNav.classList.contains("active")) {
    primaryNav.classList.remove("active");
  } else {
    primaryNav.classList.add("active");
  }
});
