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

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const weatherInfo = await response.json();
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
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

//used in the function above
function convert(tms) {
  console.log(tms)
  const ts = tms * 1000; // convert to milliseconds
  const date = new Date(ts);
  const hours = date.getHours()>12 ? date.getHours()-12 : date.getHours();

  //const minutes = date.getMinutes();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
  //console.log(`${hours}:${minutes}`);
}
