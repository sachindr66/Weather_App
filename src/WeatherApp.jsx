// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css'; // Ensure your CSS file is correctly linked

// function App() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const apiKey = '8ba79e53c609ebb193de3b553f07d83c'; // Replace with your API key

//   const getWeatherData = async (cityName) => {
//     setLoading(true);
//     try {
//       const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
//       const response = await axios.get(apiLink);
//       const data = response.data;
//       setWeather(data);
//       setError('');
//     } catch (err) {
//       setError('Please enter a valid city name.');
//       setWeather(null);
//     }
//     setLoading(false);
//   };

//   const handleSearch = () => {
//     if (city.trim() === '') {
//       setError('Please enter a city name.');
//       setWeather(null);
//     } else {
//       getWeatherData(city.trim());
//       setError('');
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleSearch();
//   };

//   const getBackgroundAndIcon = () => {
//     if (!weather) return { background: '#ffffff', icon: './images/clear.png' };
//     const weatherCondition = weather.weather[0].main.toLowerCase();
//     switch (weatherCondition) {
//       case 'clear':
//         return { background: 'url("./images/clearbg.webp")', icon: './images/clear.png' };
//       case 'rain':
//         return { background: 'url("./images/rain.jpg")', icon: './images/rain.png' };
//       case 'snow':
//         return { background: 'url("./images/snowbg.jpg")', icon: './images/snow.png' };
//       case 'clouds':
//         return { background: 'url("./images/Clouds.jpg")', icon: './images/cloud.png' };
//       case 'mist':
//         return { background: 'url("./images/mist.jpg")', icon: './images/mist.png' };
//       default:
//         return { background: '#ffffff', icon: './images/clear.png' };
//     }
//   };

//   const { background, icon } = getBackgroundAndIcon();

//   return (
//     <div className="App" style={{ backgroundImage: `url(${background})` }}>
//       {loading ? (
//         <div className="preloader">Loading...</div>
//       ) : (
//         <div className="weather-container">
//           <h1 className="heading">Fetch Weather Info</h1>
//           <form onSubmit={handleSubmit} className="search-container">
//             <i className="fa-solid fa-location-dot location" style={{ color: '#fff' }}></i>
//             <input
//               className="search"
//               type="text"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               placeholder="Search Your City..."
//             />
//             <button type="submit" className="search-icon" style={{ color: '#fff' }}>
//               <i className="fa-solid fa-magnifying-glass"></i>
//             </button>
//           </form>
//           {error && <h2 className="warn">{error}</h2>}
//           {weather && (
//             <div className="w-d-c">
//               <div className="weather-details-container">
//                 <img className="weather-condition-icon" src={icon} alt="weather-condition-img" />
//                 <div className="txt-container">
//                   <h1 className="temp">{Math.round(weather.main.temp)}<span>°C</span></h1>
//                   <p className="weather">{weather.weather[0].description}</p>
//                   <p className="City">{weather.name}</p>
//                   <div className="min-max-temp-container">
//                     <p className="min-temp">Min Temp: {weather.main.temp_min}°C</p>
//                     <p className="max-temp">Max Temp: {weather.main.temp_max}°C</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="weather-condition-container">
//                 <div className="humidity-container">
//                   <img src="./images/humidity.png" alt="humidity" />
//                   <div className="humidity-details">
//                     <p className="humidity-level">{weather.main.humidity}%</p>
//                     <p>Humidity</p>
//                   </div>
//                 </div>
//                 <div className="Wind-container">
//                   <i className="fa-solid fa-wind" style={{ color: '#ffffff' }}></i>
//                   <div className="humidity-details">
//                     <p className="Wind-speed">{weather.wind.speed} km/h</p>
//                     <p>Wind Speed</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//           <div className="container-404">
//             <img src="./images/404.png" alt="" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './Components/WeatherCard';
import BackgroundImages from './Components/BackgroundImages';
import { StateContext } from './Components/Context';

const WeatherApp = () => {
  const [city, setCity] = useState('hassan');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const apikey = '8ba79e53c609ebb193de3b553f07d83c';

  const getWeatherData = async (cityName) => {
    setLoading(true);

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
    <StateContext.Provider value={{ weather }} className='sta'>
      <div className='parent'>
        <div className="background-image">
        <BackgroundImages />
        </div>
        <div className='card_container'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className='header'>
            <div className='form'>
             <h1>weather App</h1>
              <form onSubmit={handleSubmit}>
                <div className='input-btn'>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Search Your City"
                />
                <button type="submit">Search</button>
                </div>
              </form>
            </div>
            </div>
          )}
            <div className='weather-card'>
              {weather && <WeatherCard weather={weather} />}
            </div>
          {error && <h1>{error}</h1>}
        </div>
      </div>
    </StateContext.Provider>
  );
};

export default WeatherApp;
