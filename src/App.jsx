import React, { useEffect } from 'react';
import './App.css';
import { useWeather } from './hooks/useWeather';
import { useBook } from './hooks/useBook'; // Import mesin buku
import BookFinder from './components/BookFinder'; // Import tampilan buku

function App() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const { city, setCity, weather, loading, error, fetchWeather } = useWeather(apiKey);
  const { book, fetchRandomBook, loading: bookLoading } = useBook(); 

  useEffect(() => {
    fetchWeather("South Tangerang");
  }, []);

  return (
    <div className="container">
      <div className="background-shapes">
        <div className="shape circle1"></div>
        <div className="shape circle2"></div>
      </div>
      
      <div className="glass-card">
        <h1 className="brand">Mood<span>Cast</span></h1>
        
        <div className="search-section">
          <input 
            type="text" 
            placeholder="Cari Kota..." 
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn-search" onClick={() => fetchWeather(city)}>Search</button>
        </div>

        {weather && (
          <main className="weather-display">
            <h2 className="location">{weather.city}</h2>
            <div className="temp">{weather.temp}°C</div>
            <p className="description">{weather.desc}</p>
            
            <div className="divider"></div>

            <section className="recommendation">
              <h3>Daily Suggestion</h3>
              <p>"{weather.recommendation}"</p>
              
              {/* LOGIKA KRUSIAL: Jika hujan (Rain), tampilkan BookFinder */}
              {weather.main === 'Rain' && (
                <BookFinder 
                  book={book} 
                  onFetch={fetchRandomBook} // Kabel tersambung!
                  loading={bookLoading} 
                />
              )}
            </section>
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
