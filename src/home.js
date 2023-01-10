
function createHome() {

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    const chefContainer = document.createElement("div");
    chefContainer.classList.add("chef-container");

    const chefPicture = document.createElement("div");
    chefPicture.classList = "chef-picture";

    const homeText = document.createElement("p")
    homeText.classList = "home-text";
    homeText.textContent = "Bringing you authentic pizza since 1897"

    chefContainer.appendChild(chefPicture);
    mainContainer.appendChild(chefContainer);
    mainContainer.appendChild(homeText);

    return mainContainer

}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;