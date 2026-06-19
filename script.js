const API_KEY = "cd9b958e513c5c5ad83180c86a614ac9";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const weatherBox = document.getElementById("weather");
const errorBox = document.getElementById("error");

async function checkWeather(city){

    const apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(apiUrl);

    if(response.status === 404){
        errorBox.style.display = "block";
        weatherBox.style.display = "none";
        return;
    }

    const data = await response.json();

    document.getElementById("city").innerText =
    `${data.name}, ${data.sys.country}`;

    document.getElementById("temperature").innerText =
    `${Math.round(data.main.temp)}°C`;

    document.getElementById("description").innerText =
    data.weather[0].description;

    document.getElementById("humidity").innerText =
    `${data.main.humidity}%`;

    document.getElementById("wind").innerText =
    `${data.wind.speed} km/h`;

    document.getElementById("feelsLike").innerText =
    `${Math.round(data.main.feels_like)}°C`;

    document.getElementById("pressure").innerText =
    `${data.main.pressure} hPa`;

    const iconCode = data.weather[0].icon;

    document.getElementById("weatherIcon").src =
    `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    weatherBox.style.display = "block";
    errorBox.style.display = "none";

    changeBackground(data.weather[0].main);
}

function changeBackground(condition){

    const body = document.body;

    switch(condition){

        case "Clear":
            body.style.background =
            "linear-gradient(135deg,#f6d365,#fda085)";
            break;

        case "Clouds":
            body.style.background =
            "linear-gradient(135deg,#bdc3c7,#2c3e50)";
            break;

        case "Rain":
        case "Drizzle":
            body.style.background =
            "linear-gradient(135deg,#4facfe,#00f2fe)";
            break;

        case "Thunderstorm":
            body.style.background =
            "linear-gradient(135deg,#232526,#414345)";
            break;

        case "Snow":
            body.style.background =
            "linear-gradient(135deg,#e6dada,#274046)";
            break;

        default:
            body.style.background =
            "linear-gradient(135deg,#00b4db,#0083b0)";
    }
}

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if(city !== ""){
        checkWeather(city);
    }
});

cityInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        const city = cityInput.value.trim();

        if(city !== ""){
            checkWeather(city);
        }
    }
});

/* Default City */
checkWeather("Delhi");
