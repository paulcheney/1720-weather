// GRAB REFERERENCES TO BUTTONS AND CALL A FUNCTION
const parkName = document.querySelector("#parkname")
const currentTemp = document.querySelector("#currentTemp")
const currentConditions = document.querySelector("#currentConditions")

//IMPORT THE MODULES
import {getCurrentWeather} from "../modules/current-weather.mjs";


// FUNCTION TO CHANGE IMAGE AND PARK NAME
function handleClick(park, img) {
  document.body.style.backgroundImage = `url(images/${img})`;
  parkName.innerText = park
}

//BUTTONS
document.querySelector("#bis").addEventListener("click", () => {
  handleClick("Biscayne", "bis.webp");
  const currentWeatherInfo = getCurrentWeather(25.4694, -80.1889)
});

document.querySelector("#cra").addEventListener("click", () => {
  handleClick("Crater Lake", "cra.webp");
  const currentWeatherInfo = getCurrentWeather(42.93776, -122.10151)
});

document.querySelector("#gre").addEventListener("click", () => {
  handleClick("Great Smoky Mountain", "gre.webp");
  const currentWeatherInfo = getCurrentWeather(35.60582, -83.53926)
});

document.querySelector("#mam").addEventListener("click", () => {
  handleClick("Mammoth Cave", "mam.webp");
  const currentWeatherInfo = getCurrentWeather(37.18718, -86.09774)
});


// CALL DEFAULT WEATHER
handleClick("Biscayne", "bis.webp");
  const currentWeatherInfo = getCurrentWeather(25.4694, -80.1889)