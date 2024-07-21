import React, { useEffect, useState } from 'react'

import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/fog.png'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'
import { useStateContext } from './Context'
import '../App.css'

const BackgroundImages = () => {

    const { weather } = useStateContext()
    const [image, setImage] = useState(Clear)

    useEffect(() => {
        if (weather?.weather?.[0]?.description) {
            let imageString = weather.weather[0].description;
            if (imageString.toLowerCase().includes('clear')) {
              setImage(Clear);
            } else if (imageString.toLowerCase().includes('cloud')) {
                setImage(Cloudy)
            } else if (imageString.toLowerCase().includes("rain") || imageString.toLowerCase().includes("shower")) {
                setImage(Rainy)
            } else if (imageString.toLowerCase().includes("snow")) {
                setImage(Snow)
            } else if (imageString.toLowerCase().includes("fog")) {
                setImage(Fog)
            } else if (imageString.toLowerCase().includes("thunder") || imageString.toLowerCase().includes('storm')) {
                setImage(Stormy)
            }
        }
    }, [weather])



    return (
            <img src={image} alt="" className='background_img'/>
    )
}

export default BackgroundImages
