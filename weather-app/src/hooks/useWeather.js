import { useState, useCallback } from "react";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      // Get coordinates of the city
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1&language=en`
      );
      const geoData = await geoRes.json();

      if (!geoData.results?.length) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Get weather data
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
      );
      const weatherData = await weatherRes.json();

      if (!weatherData.current_weather) {
        throw new Error("Failed to fetch current weather");
      }

      const daily = weatherData.daily || {};

      const formattedWeather = {
        city: name,
        country,
        temperature: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        description:
          weatherData.current_weather.weathercode < 3
            ? "sunny"
            : weatherData.current_weather.weathercode < 50
              ? "cloudy"
              : "rainy",
        forecast:
          daily.time?.map((date, i) => ({
            date,
            min: daily.temperature_2m_min?.[i],
            max: daily.temperature_2m_max?.[i],
          })) || [],
      };

      setWeather(formattedWeather);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  }, []);

  return { weather, loading, error, fetchWeather };
};

export default useWeather;
