import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createNav() {

    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container")

    const navbarContainer = document.createElement("div");
    navbarContainer.classList.add("navbar-container");



    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Eustorgio Marino";
    titleContainer.appendChild(title);



    const homeBtn = document.createElement("button")
    homeBtn.classList.add("nav-button");
    homeBtn.classList.add("home-button");
    homeBtn.textContent = "Home";

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("nav-button");
    menuBtn.textContent = "Menu";

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("nav-button");
    contactBtn.textContent = "Contact";


    navbarContainer.appendChild(homeBtn);
    navbarContainer.appendChild(menuBtn);
    navbarContainer.appendChild(contactBtn);

    nav.appendChild(titleContainer);
    nav.appendChild(navbarContainer);

    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return
        }
        setButtonActive(e);
        loadHome();
    })

    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return
        }
        setButtonActive(e);
        loadMenu();
    })

    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return
        }
        setButtonActive(e);
        loadContact();
    })

    return nav
}

function createMain() {

    const main = document.createElement("main");
    main.id = "main";

    return main
}

function setButtonActive(e) {

    const navButtons = document.querySelectorAll(".nav-button");

    navButtons.forEach(button => {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        }

        e.target.classList.add("active");
    });

}

function createFooter() {

    const footer = document.createElement("footer");

    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer-container");
    footer.appendChild(footerContainer);

    const footerText = document.createElement("p");
    footerText.classList.add("footer-text");
    footerText.textContent = "© Copyright 2023"
    footerContainer.appendChild(footerText);

    return footer

}

function createPage() {
    const content = document.getElementById("content");

    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

export default createPage;
