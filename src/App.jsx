import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CityInput from './Compnents/CityInput';
import WeatherCard from './Compnents/WeatherCard';

function App() {
  const [cities, setCities] = useState([]);

  const handleWeatherUpdate = (data) => {
    setCities([...cities, data]);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Weather Dashboard</h1>
      <CityInput onWeatherUpdate={handleWeatherUpdate} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.map((cityData, index) => (
          <WeatherCard key={index} weatherData={cityData} />
        ))}
      </div>
    </div>
  );
}

export default App;
