document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙"; 
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "light");
        } else {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    VanillaTilt.init(document.querySelector(".card"), {
        max: 25,
        speed: 400
    });

    var typed = new Typed("#typed", {
        strings: ["HTML", "CSS", "JavaScript", "MySQL"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
});

var typed = new Typed("#typed2", {
    strings: ["Coding", "Gaming", "Tennis"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});