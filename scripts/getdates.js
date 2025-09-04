let now = new Date();

let year = now.getFullYear();

document.querySelector("#currentYear").textContent = year;

let date = now.toLocaleString();
document.querySelector("#lastModified").textContent = date;

