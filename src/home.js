
function createHome() {

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    const chefPicture = document.createElement("div");
    chefPicture.classList = "chef-picture";

    const homeText = document.createElement("p")
    homeText.classList = "home-text";
    homeText.textContent = "Bringing you authentic pizza since 1897"

    mainContainer.appendChild(chefPicture);
    mainContainer.appendChild(homeText);

    return mainContainer

}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;