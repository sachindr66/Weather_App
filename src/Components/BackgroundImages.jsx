import React, { useEffect, useState } from 'react'

import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/fog.jpg'
import Cloudy from '../assets/images/Cloud1.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/background.jpg'
import error from '../assets/images/Stormy1.jpg'

import { useStateContext } from './Context'
import '../App.css'

const BackgroundImages = () => {

    const { weather } = useStateContext()
    const [image, setImage] = useState(Sunny)

    useEffect(() => {
        if (weather?.weather?.[0]?.description) {
            let imageString = weather.weather[0].description.toLowerCase();
            if (imageString.includes('clear')) {
              setImage(Clear);
            } else if (imageString.includes('cloud')) {
                setImage(Cloudy)
            } else if (imageString.includes("rain") || imageString.includes("shower")) {
                setImage(Rainy)
            } else if (imageString.includes("snow")) {
                setImage(Snow)
            } else if (imageString.includes("fog")) {
                setImage(Fog)
            } else if (imageString.includes("thunder") || imageString.includes('storm')) {
                setImage(Stormy)
            }
            else{
                setImage(Sunny)
            }
        }
        else {
            setImage(error)
        }
    }, [weather])



    return (
        <img src={image} alt="background" className='background_img' />
    )
}

export default BackgroundImages
