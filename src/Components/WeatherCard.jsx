import React, { useEffect, useState } from 'react';
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud1.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import humudity from '../assets/icons/humidity.png'
import speed from '../assets/icons/anemometer.png'

const WeatherCard = ({ weather, date, time }) => {

const [icon, setIcon]=useState(sun)

  useEffect(() => {
    if (weather?.weather?.[0]?.description) {
        let iconString = weather.weather[0].description;
        if (iconString.toLowerCase().includes('cloud')) {
          setIcon(cloud);
        } else if (iconString.toLowerCase().includes('rain')) {
            setIcon(rain)
          } else if (iconString.toLowerCase().includes('clear')) {
            setIcon(sun)
          } else if (iconString.toLowerCase().includes('thunder')) {
            setIcon(storm)
          } else if (iconString.toLowerCase().includes('fog')) {
            setIcon(fog)
          } else if (iconString.toLowerCase().includes('snow')) {
            setIcon(snow)
          } else if (iconString.toLowerCase().includes('wind')) {
            setIcon(wind)
          }
  }
},[weather])


  return (
    
    <div className='weather-card-main'>
      <div className="weather-details-container">
        <img className="weather-condition-icon" src={icon} alt="weather condition" />
        <div className="txt-container">
          <h1 className="temp">
            {Math.round(weather.main.temp)}
            <span>°C</span>
          </h1>
          <p className="weather">{weather.weather[0].description}</p>
          <p className="City">{weather.name},{weather.sys.country}</p>
          <div className="min-max-temp-container">
            <p className="min-temp">Min Temp: {weather.main.temp_min}°C</p>
            <p className="max-temp">Max Temp: {weather.main.temp_max}°C</p>
          </div>
        </div>
      </div>
      <div className='date-time'>
        <div className='date'>
        <p>Current Date:</p>
        <p>{date}</p>
        </div>
        <div className='time'>
        <p>Current Time:</p>
        <p>{time}</p>
        </div>
      </div>
      <div className='humidity-wind'>
        <div className="humidity-container">
          <img src={humudity} alt="humidity" className='humidity-icons' />
          <div className="humidity-details">
            <p className="humidity-level">{weather.main.humidity}%</p>
            <p>Humidity</p>
        </div>
      </div>
      <div className="Wind-container">
        <img src={speed} alt="humidity" className='humidity-icons' />
        <div className="humidity-details">
          <p className="Wind-speed">{weather.wind.speed}km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    
      </div>
    </div>
  );
};

export default WeatherCard;
