
function CreateContact() {


    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const contactInfoContainer = document.createElement("div");
    contactInfoContainer.classList.add("contact-info-container");

    const phoneInfo = document.createElement("p");
    phoneInfo.classList.add("contact-info");
    phoneInfo.textContent = "📞 123-456-7890";

    const addressInfo = document.createElement("p");
    addressInfo.classList.add("contact-info")
    addressInfo.textContent = "📍 474 Forest Ave, Plymouth Township, Mi"

    const googleMapContainer = document.createElement("div");
    googleMapContainer.classList.add("google-map-container");

    const googleMap = document.createElement("div");
    googleMap.classList.add("google-map");

    contactInfoContainer.appendChild(phoneInfo);
    contactInfoContainer.appendChild(addressInfo);

    contactContainer.appendChild(contactInfoContainer);
    googleMapContainer.appendChild(googleMap);
    contactContainer.appendChild(googleMapContainer);





    return contactContainer;
};

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = ""
    main.appendChild(CreateContact());
}

export default loadContact