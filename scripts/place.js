let now = new Date();

let year = now.getFullYear();

document.querySelector("#currentYear").textContent = year;

let date = now.toLocaleString();
document.querySelector("#lastModified").textContent = date;

let windChill = 0;
let airTemp = 15;
let windSpeed = 9

if(airTemp <= 10 || windSpeed > 4.8){
    windChill = 13.12 + 0.6215*airTemp - 11.37*(windSpeed**0.16)+0.3965*airTemp*(windSpeed**0.16);
    windChill = Math.floor(windChill);

    document.querySelector("#wind-chill").textContent = windChill+ "km/h";

}else{
    document.querySelector("#wind-chill").textContent = "N/A";
}


