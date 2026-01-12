import { useState, useEffect } from 'react';

export const useWeather = (apiKey) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getRecommendation = (main) => {
    const activities = {
      Clear: "Cuaca cerah! Sempurna untuk lari pagi atau cari inspirasi Machine Learning di taman.",
      Clouds: "Sedikit mendung. Cocok untuk ngoding Python sambil ditemani kopi hangat.",
      // Update sesuai permintaanmu:
      Rain: "Sedang hujan. Waktunya fokus dalam ketenangan, mungkin membaca?", 
      Drizzle: "Gerimis tipis. Tetap di dalam rumah dan selesaikan proyek React-mu!",
      Thunderstorm: "Ada badai! Matikan perangkat elektronik yang tidak perlu dan istirahat sejenak.",
      Default: "Cuaca tidak menentu, tetap siaga dan fokus pada tujuanmu!"
    };
    return activities[main] || activities.Default;
  };

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather({
          city: data.name,
          temp: Math.round(data.main.temp),
          desc: data.weather[0].description,
          main: data.weather[0].main,
          humidity: data.main.humidity + "%",
          wind: data.wind.speed + " km/h",
          recommendation: getRecommendation(data.weather[0].main)
        });
      } else {
        setError("Kota tidak ditemukan.");
      }
    } catch (err) {
      setError("Gagal mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  return { city, setCity, weather, loading, error, fetchWeather };
};