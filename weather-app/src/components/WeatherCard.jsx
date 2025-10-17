import React from "react";

function WeatherCard({ weather, isFavorite, onToggleFavorite }) {
  return (
    <div className="weather-card">
      <h2>
        {weather.city}, {weather.country}
      </h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind: {weather.wind} км/год</p>
      <p>Description: {weather.description}</p>

      <div className="forecast">
        <h4>Forecast:</h4>
        <ul>
          {weather.forecast.map((day, i) => (
            <li key={i}>
              {day.date}: {day.min}°C / {day.max}°C
            </li>
          ))}
        </ul>
      </div>

      <button onClick={() => onToggleFavorite(weather.city)}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
}

export default WeatherCard;
