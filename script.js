// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function () {

    document.body.classList.toggle("dark");

    // Save preference
    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");
    }

});


// ===============================
// LOAD SAVED THEME
// ===============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.checked = true;
}


// ===============================
// MOBILE MENU
// ===============================

const menuIcon = document.getElementById("menuIcon");

const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// ===============================
// CLOSE MOBILE MENU
// ===============================

document.querySelectorAll(".navbar a").forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");

    });

});
// ===============================
// ACTIVE NAVBAR ON SCROLL
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});