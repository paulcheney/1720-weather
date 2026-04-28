// EXPORT FUNCTION TO CHANGE IMAGE AND PARK NAME
export function changeImage(park, img) {
  document.body.style.backgroundImage = `url(images/${img})`;
  document.querySelector("#parkName").innerText = park;
}


// EXPORT ASYNC FUNCTION TO GRAB THE CURRENT WEATHER
export async function getCurrentWeather(lat, lon) {
  const apiKey = "437209d363a4387bb2f5dffcea58bbee";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    );

    displayWeather(await response.json())

  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// internal function to display the current park weather info
function displayWeather(weatherInfo) {
  console.log(weatherInfo);
  document.querySelector('#currentTemp').innerText = `${Math.floor(weatherInfo.main.temp)}°`;
  // fill in weather information
  document.querySelector("#currentConditions").innerHTML = `
  <img src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="weather icon">
  <p>${weatherInfo.weather[0].description}</p>
  <p>LOW: ${Math.floor(weatherInfo.main.temp_max)}° 
  - HIGH: ${Math.floor(weatherInfo.main.temp_min)}°</p>
  <p>Wind Speed: ${weatherInfo.wind.speed}mph</p>
  <p>Wind Gusts: ${weatherInfo.wind.gust}mph</p>
  <p>Sunrise: ${convert(weatherInfo.sys.sunrise)} AM</p>
  <p>Sunset: ${convert(weatherInfo.sys.sunset)} PM</p>
  `;
}


//internal function used to convert time
function convert(ts) {
  //console.log(ts)
  const sunTime = new Date(ts * 1000);
  const hours = sunTime.getHours()>12 ? sunTime.getHours()-12 : sunTime.getHours();

  //const minutes = sunTime.getMinutes();
  const minutes = sunTime.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
  //console.log(`${hours}:${minutes}`);
}
