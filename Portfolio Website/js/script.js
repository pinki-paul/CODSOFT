

// navbar scrolling

let navbar = document.querySelector(".navbar");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add("header-scrolled");
    } else {
        navbar.classList.remove("header-scrolled");
    }
}

// nav hide
let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLink.forEach((a) => {
    a.addEventListener("click", () => {
        navCollapse.classList.remove("show");
    });
});