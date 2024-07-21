// import axios from 'axios'
// import React, { useState } from 'react'

// const WeatherCard = () => {

//   const [city, setCity] = useState("hassan")
//   const [weather, setWeather] = useState("")
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)

//   const apikey = '8ba79e53c609ebb193de3b553f07d83c'

//   const getWeatherData = async (cityName) => {
//     setLoading(true)

//     try {
//       const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;
//       const response = await axios.get(apiLink)
//       const data = response.data
//       setWeather(data)
//       setError('')
//       console.log(data)
//     } catch {
//       setError('please enter a valid city name.')
//       setWeather(null)
//     }
//     setLoading(false);
//   }

//   const handleSearch = () => {
//     if (city.trim() === '') {
//       setError('Please enter a city name.');
//       setWeather(null);
//     } else {
//       getWeatherData(city.trim());
//       setError('');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSearch('')
//   }






//   return (
//     <div>
//       {loading ? (
//         <div>  Loading... </div>
//       ) : (
//         <div>
//           <form action="" onSubmit={handleSubmit}>
//             <input type="text"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               placeholder='Search Your City' />
//             <button type='submit'>Search</button>
//           </form>
//           {error && <h1>{error}</h1>}
//           {
//             weather && (
//               <div>
//                 <div className="weather-details-container">
//                   <img className="weather-condition-icon" src="" alt="weather-condition-img" />
//                   <div className="txt-container">
//                     <h1 className="temp">{Math.round(weather.main.temp)}<span>°C</span></h1>
//                     <p className="weather">{weather.weather[0].description}</p>
//                     <p className="City">{weather.name}</p>
//                     <div className="min-max-temp-container">
//                       <p className="min-temp">Min Temp: {weather.main.temp_min}°C</p>
//                       <p className="max-temp">Max Temp: {weather.main.temp_max}°C</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="weather-condition-container">
//                   <div className="humidity-container">
//                     <img src="./images/humidity.png" alt="humidity" />
//                     <div className="humidity-details">
//                       <p className="humidity-level">{weather.main.humidity}%</p>
//                       <p>Humidity</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="Wind-container">
//                   <i className="fa-solid fa-wind"></i>
//                   <div className="humidity-details">
//                     <p className="Wind-speed">{weather.wind.speed}km/h</p>
//                     <p>Wind Speed</p>
//                   </div>
//                 </div>
//               </div>
//             )}
//         </div>
//       )}

//     </div>
//   )
// }

// export default WeatherCard


import React, { useEffect, useState } from 'react';
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'

const WeatherCard = ({ weather }) => {

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
          <p className="City">{weather.name}</p>
          <div className="min-max-temp-container">
            <p className="min-temp">Min Temp: {weather.main.temp_min}°C</p>
            <p className="max-temp">Max Temp: {weather.main.temp_max}°C</p>
          </div>
        </div>
      </div>
      <div className='humidity-wind'>
      <div className="weather-condition-container">
        <div className="humidity-container">
          <img src="./images/humidity." alt="humidity" />
          <div className="humidity-details">
            <p className="humidity-level">{weather.main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
      </div>
      <div className="Wind-container">
        <i className="fa-solid fa-wind"></i>
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
