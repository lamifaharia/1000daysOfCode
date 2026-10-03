// Select elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const message = document.getElementById("message");


// Sample weather data
const weatherData = {
    dhaka: {
        name: "Dhaka",
        icon: "☀️",
        temperature: 31,
        description: "Sunny",
        humidity: 65,
        wind: 12
    },

    chittagong: {
        name: "Chittagong",
        icon: "🌤️",
        temperature: 29,
        description: "Partly Cloudy",
        humidity: 72,
        wind: 10
    },

    sylhet: {
        name: "Sylhet",
        icon: "🌧️",
        temperature: 27,
        description: "Rainy",
        humidity: 80,
        wind: 8
    },

    rajshahi: {
        name: "Rajshahi",
        icon: "☀️",
        temperature: 33,
        description: "Sunny",
        humidity: 55,
        wind: 14
    },

    khulna: {
        name: "Khulna",
        icon: "⛅",
        temperature: 30,
        description: "Cloudy",
        humidity: 68,
        wind: 11
    }
};


// Show weather information
function showWeather() {

    // Get city name from input
    const city = cityInput.value.trim().toLowerCase();


    // Check empty input
    if (city === "") {
        message.textContent = "Please enter a city name.";
        return;
    }


    // Find weather data
    const weather = weatherData[city];


    // Check if city exists
    if (!weather) {
        message.textContent =
            "Weather data not found for this city.";

        return;
    }


    // Update weather information
    cityName.textContent = weather.name;

    weatherIcon.textContent = weather.icon;

    temperature.textContent =
        `${weather.temperature}°C`;

    description.textContent =
        weather.description;

    humidity.textContent =
        `${weather.humidity}%`;

    wind.textContent =
        `${weather.wind} km/h`;


    // Clear error message
    message.textContent = "";
}


// Search button
searchBtn.addEventListener("click", showWeather);


// Press Enter to search
cityInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        showWeather();
    }

});