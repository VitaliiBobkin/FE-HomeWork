import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import FavoritesList from "./components/FavoritesList";
import useWeather from "./hooks/useWeather";
import "./index.css";

function App() {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "");
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch {
      return [];
    }
  });

  const { weather, loading, error, fetchWeather } = useWeather();

  // Fetch weather when a city changes
  useEffect(() => {
    if (city) {
      fetchWeather(city).catch(console.error);
    }
  }, [city, fetchWeather]);

  // Save last opened city to localStorage
  useEffect(() => {
    if (city) localStorage.setItem("lastCity", city);
  }, [city]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  const toggleFavorite = (cityName) => {
    const updated = favorites.includes(cityName)
      ? favorites.filter((c) => c !== cityName)
      : [...favorites, cityName];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const handleSelectFavorite = (favCity) => {
    setCity(favCity);
  };

  return (
    <div className={`app-container ${weather?.description || ""}`}>
      <div className="content">
        <h1 className="text-center mb-3">Weather</h1>

        <SearchBar onSearch={handleSearch} />

        <div className="main">
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {!loading && weather && (
            <WeatherCard
              weather={weather}
              isFavorite={favorites.includes(weather.city)}
              onToggleFavorite={toggleFavorite}
            />
          )}
        </div>

        <FavoritesList
          favorites={favorites}
          onSelectCity={handleSelectFavorite}
        />
      </div>
    </div>
  );
}

export default App;
