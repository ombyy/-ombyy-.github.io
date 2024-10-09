document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.hash;

    switch (currentPath) {
        case "#home":
            document.getElementById("home-link").classList.add("active", "active-home");
            break;
        case "#projects":
            document.getElementById("projects-link").classList.add("active", "active-projects");
            break;
        case "#contact":
            document.getElementById("contact-link").classList.add("active", "active-contact");
            break;
        case "#about":
            document.getElementById("about-link").classList.add("active", "active-about");
            break;
        default:
            document.getElementById("home-link").classList.add("active", "active-home");
            break;
    }
});