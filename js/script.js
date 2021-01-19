const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");

function toggleHam() {
    nav.classList.toggle("open");
    navIcon.forEach((icon) => {
        icon.classList.toggle("hidden");
    });
};

navToggle.addEventListener("click", toggleHam);


window.addEventListener(
    "resize", () => {
        if (document.body.clientWidth > 720) {
            nav.classList.remove("open");
            navIcon.forEach((icon) => {
                icon.classList.remove("hidden");
            });
            navOpenIcon.classList.add("hidden");
        }
    }, {
        passive: false
    }
);