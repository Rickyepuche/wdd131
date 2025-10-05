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