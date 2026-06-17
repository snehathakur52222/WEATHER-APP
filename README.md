🌦️ Weather App

A responsive Weather App built using HTML, CSS, and JavaScript. It allows users to search for weather information by city name or use their current location to get real-time weather updates.

Features

✅ Search weather by city name
✅ Get weather using current location (Geolocation API)
✅ Dark/Light theme toggle
✅ Recent search history using Local Storage
✅ Displays:

- Temperature
- Humidity
- Wind Speed
- Weather Description
- Weather Icon

Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- OpenWeatherMap API
- Local Storage
- Geolocation API

Project Structure

weather-app/
│
├── index.html
├── style.css
├── script.js
└── README.md

Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/weather-app.git

2. Get an API Key

1. Create a free account at OpenWeatherMap.
2. Generate an API key.
3. Open "script.js".
4. Replace:

const apiKey='YOUR_API_KEY';

with:

const apiKey='YOUR_ACTUAL_API_KEY';

3. Run the Project

Simply open "index.html" in your browser.

How It Works

- Enter a city name and click Search.
- Or click 📍 My Location to get weather based on your current location.
- The app fetches weather data from OpenWeatherMap API.
- Recent searches are stored in browser Local Storage.
- Theme preference can be switched using the toggle button.

Future Improvements

- 5-Day Weather Forecast
- Search History Click Support
- Theme Persistence
- Better Error Handling
- Animated Weather Icons
- Air Quality Index (AQI)

Author

Developed by Sneha Thakur
