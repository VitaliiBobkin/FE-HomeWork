# FE-HomeWork

## Home_Work_61
## Tasks Overview

## TASK: Create a small application that shows the weather for the entered city, with the ability to add the city to “favorites”.

### Main functionality
City search
Input for entering the city name.
After clicking the “Search” button — the weather is loaded via the API.
If the city is not found — show an error message.
Weather display
City name, country.
Current temperature, wind, weather description.
Forecast for several days (min/max temperature).
Favorites
Button “Add to favorites” / “Delete”.
Favorite cities are stored in localStorage.
You can quickly click on the selected city to update the weather.
API (without key)
1. Geocoding (city search): https://geocoding-api.open-meteo.com/v1/search?name={CITY}&count=1&language=uk

2. Weather: https://api.open-meteo.com/v1/forecast?latitude={LAT}&longitude={LON}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto

Components
<App /> — main component
<SearchBar /> — input and search button
<WeatherCard /> — shows weather for current city
<FavoritesList /> — list of favorite cities
Use
React Hooks: useState, useEffect
Working with API: fetch
Saving in localStorage
Conditional rendering (Loading / Error / Empty)

