import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './Components/WeatherCard';
import BackgroundImages from './Components/BackgroundImages';
import { StateContext } from './Components/Context';
import UseDate from './Components/UseDate';
import {  LocationOn, Search } from '@mui/icons-material';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({
    main:{temp:0, temp_min:0, temp_max:0, humidity:0},
    weather:[{description: 'Sunny'}],
    name: 'city',
    wind: {speed:0},
    sys:{country:"country"}
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {date, time} =UseDate()

  const apikey = '8ba79e53c609ebb193de3b553f07d83c';

  const getWeatherData = async (cityName) => {
    setLoading({
      main:{temp:0, temp_min:0, temp_max:0, humidity:0},
      weather:[{description: 'sunny'}],
      name: 'city',
      wind: {speed:0},
      sys:{country:"country"}
    });

    try {
      const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;
      const response = await axios.get(apiLink);
      const data = response.data;
      setWeather(data);
      setError('');
    console.log(data);
      
    } catch {
      setError('please enter a valid city name.');
      setWeather(null);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    if (city.trim() === '') {
      setError('Please enter a city name.');
      setWeather(null);
    } else {
      getWeatherData(city.trim());
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch('');
  };

  return (
    <StateContext.Provider value={{ weather }} >
      <div className='parent'>
        <div className="background-image">
        <BackgroundImages />
        </div>
        <div className='card_container'>
            <div className='header'>
             <h1 className='heading'>weather App</h1>
            <div className='form'>
              <form onSubmit={handleSubmit}>
                <div className='input-btn'>
                <i className='locatin_icon'><LocationOn/></i>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Search Your City"
                />
                <button type="submit"><i className='search_icon'><Search/></i></button>
                </div>
              </form>
            </div>
            </div>
            {loading ? ( <div>Loading...</div>): ("")}
            <div className='weather-card'>
            {error && <h1 className='error'>{error}</h1>}
            {weather && <WeatherCard weather={weather} date={date} time={time}/>}
            </div>
        </div>
      </div>
    </StateContext.Provider>
  );
};

export default WeatherApp;
