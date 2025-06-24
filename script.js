const apiKey = "891685a0cd4fb02607643a3fecb9523e"; // Your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    document.getElementById("weatherResult").innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found or API issue");
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const description = data.weather[0].description;

      document.getElementById("weatherResult").innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${temp} °C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Forecast: ${description}</p>
      `;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
}
