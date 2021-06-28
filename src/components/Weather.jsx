import React from 'react'

import cloudyNightSvg from '../assets/cloudy-night.svg'
import cloudyDaySvg from '../assets/cloudy-day-3.svg'
import clearDaySvg from '../assets/day.svg'
import clearNightSvg from '../assets/skc_n.svg'
import drizzleSvg from '../assets/drizzle.svg'
import rainySvg from '../assets/rainy.svg'
import snowySvg from '../assets/snowy.svg'
import thunderSvg from '../assets/thunder.svg'

const Weather = ({ date, time, temp, feels_like, weather }) => {

    const icon = (icon, time) => {
        const dayTime = time >= '06:00' && time < '20:00'
        const nightTime = time >= "20:00" || time <= "03:00"
        if(icon === "Clouds" && dayTime){
            return cloudyDaySvg
        }else if(icon === "Clouds" && nightTime){
            return cloudyNightSvg
        }else if(icon === "Clear" && dayTime){
            return clearDaySvg
        }else if(icon === "Clear" && nightTime){
            return  clearNightSvg
        }else if(icon === "Drizzle"){
            return drizzleSvg
        }else if(icon === "Rain"){
            return rainySvg
        }else if(icon === "Thunderstorm"){
            return thunderSvg
        }else if(icon === "Snow"){
            return snowySvg
        }
    }

    console.log('render weather')

    return (
        <div className='weather'>
            <div className='time'>{`${date}, ${time}`}</div>
            <div className='info'>
                <div>
                    <img src={icon(weather.main, time)} alt="" />
                </div>
                <div className='temp'>{temp}°C</div>
            </div>
            <div>
                <p className='description'>{weather.description}</p>
                <span className='description'>Ощущается как: {feels_like}°C</span>
            </div>
        </div>
    )
}

export default Weather