// ASYNC FUNCTION TO GRAB THE CURRENT WEATHER
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
    console.log(weatherInfo)
    console.log(weatherInfo.weather[0].icon)
    currentTemp.innerText = `${Math.floor(weatherInfo.main.temp)}°`
//
    currentConditions.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" width="1" height="1" alt="weather icon">
    <p>${weatherInfo.weather[0].description}</p>
    <p>LOW: ${Math.floor(weatherInfo.main.temp_max)}° - HIGH: ${Math.floor(weatherInfo.main.temp_min)}°</p>
    <p>Wind Speed: ${weatherInfo.wind.speed}mph</p>
    <p>Wind Gusts: ${weatherInfo.wind.gust}mph</p>
    `

  } catch (err) {
    console.error("Fetch error:", err);
  }
}


