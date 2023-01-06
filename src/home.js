
function loadHome() {

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

export default loadHome;