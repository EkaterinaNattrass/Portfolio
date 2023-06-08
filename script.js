function changeTheMode () {
    const nav = document.querySelector("nav");
    const expertiseLink = document.querySelector(".expertise-link");
    const projectsLink = document.querySelector(".projects-link");
    const home = document.querySelector(".home");
    const modeBtn = document.querySelector(".mode");
    const expertise = document.querySelector(".expertise");
    const right = document.querySelector(".right");
    const projects = document.querySelector(".projects");
    const contact = document.querySelector(".contact");
    nav.classList.toggle("light-mode-home");
    expertiseLink.classList.toggle("dark-font");
    projectsLink.classList.toggle("dark-font");
    home.classList.toggle("light-mode-home");
    modeBtn.classList.toggle("light-mode-projects");
    expertise.classList.toggle("expertise-light")
    right.classList.toggle("light-mode-projects");
    projects.classList.toggle("light-mode-projects");
    contact.classList.toggle("contact-light");
}


