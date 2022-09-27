const Date = document.lastModified
document.querySelector("#demo").textContent = Date;

let currentYear = new Date();
let Year = currentYear.getFullYear();
document.getElementById("year").textContent = Year;
