const API_KEY = "786c26d249cfa35e4bdec273c6a4e5ae";

const locationInput = document.getElementById("locationInput");
const weatherForm = document.getElementById("weatherForm");
const weatherInfo = document.getElementById("weatherInfo");

async function fetchWeatherData(url) {
	try {
		const res = await fetch(url);
		const weatherData = await res.json();
		return weatherData;
	} catch (error) {
		console.log(error);
		return {
			message: `Fetch error. Could not get geo data for ${cityName}`,
		};
	}
}

weatherForm.addEventListener("submit", async function (e) {
	// prevent reloading page
	e.preventDefault();

	// get query
	const targetRegion = locationInput.value;
	const query = isNaN(targetRegion) ? "q" : "zip";
	const url = `https://api.openweathermap.org/data/2.5/weather?${query}=${targetRegion}&appid=${API_KEY}&units=imperial`;
	const weatherRes = await fetchWeatherData(url);

	// unsuccessful fetch - display error message and return
	if (Object.hasOwn(weatherRes, "message")) {
		weatherInfo.innerHTML = `<span>${weatherRes.message}</span>`;
		return;
	}

	// successful fetch - extract information (as specified in README.md)
	const targetName = weatherRes.name;
	const currentTemperature = weatherRes.main.temp;
	const weatherDescription = weatherRes.weather[0].description;
	const windSpeed = weatherRes.wind.speed;
	const humidityLevel = weatherRes.main.humidity;

	// construct result to display on window
	const html = `
    <h2>Current weather in ${targetName}</h2>
    <div><b>Temperature</b>: ${currentTemperature} °F</div>
    <div><b>Weather</b>: ${weatherDescription}</div>
    <div><b>Wind Speed</b>: ${windSpeed} miles/hour</div>
    <div><b>Humidity Level</b>: ${humidityLevel} %</div>
    `;

	// plug in information
	weatherInfo.innerHTML = html;
});
