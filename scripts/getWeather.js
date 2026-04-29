//IMPORT THE MODULES
import {getCurrentWeather, changeImage} from "../modules/weather.mjs";



//BUTTONS
document.querySelector("#bis").addEventListener("click", () => {
  changeImage("Biscayne", "bis.webp");
  getCurrentWeather(25.4694, -80.1889)
});

document.querySelector("#cra").addEventListener("click", () => {
  changeImage("Crater Lake", "cra.webp");
  getCurrentWeather(42.93776, -122.10151)
});

document.querySelector("#gre").addEventListener("click", () => {
  changeImage("Great Smoky Mountain", "gre.webp");
  getCurrentWeather(35.60582, -83.53926)
});

document.querySelector("#mam").addEventListener("click", () => {
  changeImage("Mammoth Cave", "mam.webp");
  getCurrentWeather(37.18718, -86.09774)
});


// CALL DEFAULT WEATHER
changeImage("Biscayne", "bis.webp");
getCurrentWeather(25.4694, -80.1889)