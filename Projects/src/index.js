let weather = {
  paris: {
    temperatureC: 19.7,
    temperatureF: 67.5,
    humidity: 80,
  },
  tokyo: {
    temperatureC: 17.3,
    temperatureF: 63.1,
    humidity: 50,
  },
  lisbon: {
    temperatureC: 30.2,
    temperatureF: 86.4,
    humidity: 20,
  },
  "san francisco": {
    temperatureC: 20.9,
    temperatureF: 69.6,
    humidity: 100,
  },
  oslo: {
    temperatureC: -5,
    temperatureF: 23,
    humidity: 20,
  },
};

function getWeather(city) {
  let cityData = weather[city];

  if (cityData) {
    let { temperatureC, temperatureF, humidity } = cityData;
    let roundedTemperatureC = Math.round(temperatureC);
    let roundedTemperatureF = Math.round(temperatureF);
    alert(
      `It is, currently ${roundedTemperatureC},°C (${roundedTemperatureF},°F) in ${city} with a humidity of ${humidity}%
    `
    );
  } else {
    let searchLink = `https://www.google.com/search?q=weather+${city}`;
    alert(
      `Sorry, we don't know the weather for this city. Try going to ${searchLink}`
    );
  }
}

function getUserInput() {
  let city = prompt("Enter a city");
  if (city !== null && city.trim().length > 0) {
    getWeather(city.toLowerCase());
  }
}

getUserInput();
