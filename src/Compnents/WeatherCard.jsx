import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { main, weather } = weatherData;
  const { temp } = main;
  const { description } = weather[0];

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
      <h2 className="text-xl font-semibold">{weatherData.name}</h2>
      <p className="text-lg text-gray-800">Temperature: {temp}°C</p>
      <p className="text-lg text-gray-800">Conditions: {description}</p>
    </div>
  );
};

export default WeatherCard;
