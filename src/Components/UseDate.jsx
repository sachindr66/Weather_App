import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

  const UseDate = () => {

    const locale = "en"
    const [today, setDate] = useState(new Date())

    useEffect(()=>{
        const timer = setInterval(()=>{
            setDate(new Date())
        },60*1000)
        return()=>{
            clearInterval(timer)
        }
    },[])

    const day =today.toLocaleDateString(locale,{weekday: 'long'})
    const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {month: 'long'})}\n\n`
    const time = today.toLocaleDateString(locale, {hour:'numeric', hour12:true,minute:'numeric'})
  
    return {
        date, time
      
  }
}

export default UseDate

