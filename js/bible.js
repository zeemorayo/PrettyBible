document.addEventListener("DOMContentLoaded", function () {
    console.log("Bible app is running!");

    // Get elements
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check and apply saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        console.log("Saved theme found:", savedTheme);
        body.classList.add(savedTheme);
    } else {
        console.log("No saved theme, defaulting to light-mode.");
        body.classList.add("light-mode"); // Ensure it starts with a theme
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", function () {
        console.log("Theme toggle clicked!");

        if (body.classList.contains("dark-mode")) {
            console.log("Switching to light-mode...");
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light-mode");
        } else {
            console.log("Switching to dark-mode...");
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
        }
    });
});
