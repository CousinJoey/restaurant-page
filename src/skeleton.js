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
    title.textContent = "Pizza Shop";
    titleContainer.appendChild(title);



    const homeBtn = document.createElement("button")
    homeBtn.classList.add("nav-button");
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
        loadHome();
    })

    menuBtn.addEventListener("click", (e) => {
        loadMenu();
    })

    contactBtn.addEventListener("click", (e) => {
        loadContact();
    })

    return nav
}

function createMain() {

    const main = document.createElement("main");
    main.id = "main"

    return main
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
}

export default createPage;
