const navLinks = document.querySelector(".navigation");
const toggleButton = document.querySelector("#menu");

toggleButton.addEventListener("click", () =>{
    navLinks.classList.toggle("show");
    toggleButton.classList.toggle("show");
});

let now = new Date();

let year = now.getFullYear();

document.querySelector("#currentYear").textContent = year;

let date = now.toLocaleString();
document.querySelector("#lastModified").textContent = date;


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Albuquerque New Mexico",
    location: "Albuquerque, New Mexico, United States",
    dedicated: "2000, March, 2",
    area: 34245,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg",
  },
  {
    templeName: "Auckland, New Zealand",
    location: "Goodwood Heights, Auckland, New Zealand",
    dedicated: "2025, April, 13",
    area: 45456,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-56277-main.jpg",
  },
  {
    templeName: "Orem Utah",
    location: "Orem, Utah, United States",
    dedicated: "2024, January, 21",
    area: 71998,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-39549-main.jpg",
  },
];

const container = document.getElementById("temples");

function showAllTemples(){
    const theTopic = document.querySelector("#heading");
    theTopic.textContent = "Home";

    temples.forEach(temple => {
        const card = document.createElement("div");
        card.className = "temple-card";

        card.innerHTML = `
        <div class="info">
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </div>
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
        `;

        container.appendChild(card);
    });
}
function showLargeTemples(){
    const theTopic = document.querySelector("#heading");
    theTopic.textContent = "Large Temples";

    const large = temples.filter((temple) => temple.area > 90000 );
    large.forEach(temple => {
        const card = document.createElement("div");
        card.className = "temple-card";

        card.innerHTML = `
        <div class="info">
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </div>
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
        `;

        container.appendChild(card);
    });
}
function showSmallTemples(){
    const theTopic = document.querySelector("#heading");
    theTopic.textContent = "Small Temples";

    const small = temples.filter((temple) => temple.area < 10000);
    small.forEach((temple) => {
        const card = document.createElement("div");
        card.className = "temple-card";

        card.innerHTML = `
            <div class="info">
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </div>
            <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
            `;

        container.appendChild(card);
    });
}
function showNewTemples(){
    const theTopic = document.querySelector("#heading");
    theTopic.textContent = "New Temples";

    const newTemple = temples.filter((temple) => parseInt(temple.dedicated) > 2000);
    newTemple.forEach((temple) => {
        const card = document.createElement("div");
        card.className = "temple-card";

        card.innerHTML = `
            <div class="info">
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </div>
            <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
            `;

      container.appendChild(card);
    });
}
function showOldTemples() {
    const theTopic = document.querySelector("#heading");
    theTopic.textContent = "Old Temples";

    const oldTemple = temples.filter((temple) => parseInt(temple.dedicated) < 1900);
    oldTemple.forEach((temple) => {
        const card = document.createElement("div");
        card.className = "temple-card";

        card.innerHTML = `
            <div class="info">
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </div>
            <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
            `;

      container.appendChild(card);
    });
}

showAllTemples();

document.getElementById("showHome").addEventListener("click", function (event){
    event.preventDefault();
    container.innerHTML = "";
    showAllTemples();
});

document.getElementById("showLarge").addEventListener("click", function (event) {
    event.preventDefault();
    container.innerHTML = "";
    showLargeTemples();
});

document.getElementById("showNew").addEventListener("click", function (event) {
    event.preventDefault();
    container.innerHTML = "";
    showNewTemples();
});

document.getElementById("showSmall").addEventListener("click", function (event) {
    event.preventDefault();
    container.innerHTML = "";
    showSmallTemples();
});

document.getElementById("showOld").addEventListener("click", function (event) {
    event.preventDefault();
    container.innerHTML = "";
    showOldTemples();
});