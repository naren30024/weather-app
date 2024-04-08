import React, { useState } from 'react';
import axios from 'axios';

const CityInput = ({ onWeatherUpdate }) => {
  const [city, setCity] = useState('');
  const apikey = '';
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
      );
      onWeatherUpdate(response.data);
      setCity('');
    } catch (error) {
      console.error('Error fetching weather:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Add City</button>
    </form>
  );
};

export default CityInput;
