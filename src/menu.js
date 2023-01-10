
function createMenu() {

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuItem1 = document.createElement("div");
    menuItem1.classList.add("menu-item-container");

    const pictureItem1Container = document.createElement("div");
    pictureItem1Container.classList.add("picture-container");

    const pictureItem1 = document.createElement("div");
    pictureItem1.classList.add("picture-items");
    pictureItem1.classList.add("item-1")

    const nameContainer1 = document.createElement("div");
    nameContainer1.classList.add("name-container");

    const itemName1 = document.createElement("h2");
    itemName1.classList.add("item-names-and-prices");
    itemName1.textContent = "Margherita" + '....' + "19";

    const itemDescription1 = document.createElement("p");
    itemDescription1.classList.add("item-descriptions");
    itemDescription1.textContent = "Mozzarella, garlic, basil, olive oil";


    pictureItem1Container.appendChild(pictureItem1)
    nameContainer1.appendChild(itemName1);
    nameContainer1.appendChild(itemDescription1);
    menuItem1.appendChild(pictureItem1Container);
    menuItem1.appendChild(nameContainer1);


    const menuItem2 = document.createElement("div");
    menuItem2.classList.add("menu-item-container");

    const pictureItem2Container = document.createElement("div");
    pictureItem2Container.classList.add("picture-container");

    const pictureItem2 = document.createElement("div");
    pictureItem2.classList.add("picture-items");
    pictureItem2.classList.add("item-2")

    const nameContainer2 = document.createElement("div");
    nameContainer2.classList.add("name-container");

    const itemName2 = document.createElement("h2");
    itemName2.classList.add("item-names-and-prices");
    itemName2.textContent = "Capricciosa" + '....' + "23";

    const itemDescription2 = document.createElement("p");
    itemDescription2.classList.add("item-descriptions");
    itemDescription2.textContent = "Mozzarella, ham, mushroom, aritchoke, tomato";

    pictureItem2Container.appendChild(pictureItem2)
    nameContainer2.appendChild(itemName2);
    nameContainer2.appendChild(itemDescription2);
    menuItem2.appendChild(pictureItem2Container);
    menuItem2.appendChild(nameContainer2);

    const menuItem3 = document.createElement("div");
    menuItem3.classList.add("menu-item-container");

    const pictureItem3Container = document.createElement("div");
    pictureItem3Container.classList.add("picture-container");

    const pictureItem3 = document.createElement("div");
    pictureItem3.classList.add("picture-items");
    pictureItem3.classList.add("item-3")

    const nameContainer3 = document.createElement("div");
    nameContainer3.classList.add("name-container");

    const itemName3 = document.createElement("h2");
    itemName3.classList.add("item-names-and-prices");
    itemName3.textContent = "Marinara" + '....' + "17";

    const itemDescription3 = document.createElement("p");
    itemDescription3.classList.add("item-descriptions");
    itemDescription3.textContent = "Marinara, garlic, oregano";

    pictureItem3Container.appendChild(pictureItem3)
    nameContainer3.appendChild(itemName3);
    nameContainer3.appendChild(itemDescription3);
    menuItem3.appendChild(pictureItem3Container);
    menuItem3.appendChild(nameContainer3);



    const menuItem4 = document.createElement("div");
    menuItem4.classList.add("menu-item-container");

    const pictureItem4Container = document.createElement("div");
    pictureItem4Container.classList.add("picture-container");

    const pictureItem4 = document.createElement("div");
    pictureItem4.classList.add("picture-items");
    pictureItem4.classList.add("item-4")

    const nameContainer4 = document.createElement("div");
    nameContainer4.classList.add("name-container");

    const itemName4 = document.createElement("h2");
    itemName4.classList.add("item-names-and-prices");
    itemName4.textContent = "Diavola" + '....' + "28";

    const itemDescription4 = document.createElement("p");
    itemDescription4.classList.add("item-descriptions");
    itemDescription4.textContent = "Pepperoni, mozzarella, marinara";

    pictureItem4Container.appendChild(pictureItem4)
    nameContainer4.appendChild(itemName4);
    nameContainer4.appendChild(itemDescription4);
    menuItem4.appendChild(pictureItem4Container);
    menuItem4.appendChild(nameContainer4);


    menuContainer.appendChild(menuItem1);
    menuContainer.appendChild(menuItem2);
    menuContainer.appendChild(menuItem3);
    menuContainer.appendChild(menuItem4);


    return menuContainer;

}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu