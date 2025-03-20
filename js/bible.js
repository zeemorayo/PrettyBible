document.addEventListener("DOMContentLoaded", function () {
    console.log("Bible app is running!");

    const bibleContainer = document.getElementById("bible-display");
    bibleContainer.innerHTML = "<h2>Genesis 1:1</h2><p>In the beginning, God created the heavens and the earth.</p>";

    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light-mode");
        } else {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
        }
    });

    // Highlighting functionality
    document.addEventListener("click", function (event) {
        if (event.target.tagName === "P") {
            event.target.classList.toggle("highlighted");
            saveHighlights();
        }
    });

    function saveHighlights() {
        const highlightedVerses = Array.from(document.querySelectorAll(".highlighted"))
            .map(verse => verse.innerText);
        localStorage.setItem("highlightedVerses", JSON.stringify(highlightedVerses));
        loadHighlights();
    }

    function loadHighlights() {
        const savedHighlights = JSON.parse(localStorage.getItem("highlightedVerses")) || [];
        const highlightsSection = document.getElementById("highlights-section");
        highlightsSection.innerHTML = "<h2>My Highlights</h2>";
        savedHighlights.forEach(verse => {
            const p = document.createElement("p");
            p.innerText = verse;
            p.classList.add("highlighted");
            highlightsSection.appendChild(p);
        });
    }

    loadHighlights();
});
