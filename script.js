function changeTheMode () {
    const nav = document.querySelector("nav");
    const home = document.getElementById("home")
    const projects = document.querySelector("#projects");
    nav.classList.toggle("light-mode-home");
    home.classList.toggle("light-mode-home");
    projects.classList.toggle("light-mode-projects");
}


