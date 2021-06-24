import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import cloudyNightSvg from '../assets/cloudy-night.svg'
import cloudyDaySvg from '../assets/cloudy-day-3.svg'
import clearDaySvg from '../assets/day.svg'
import clearNightSvg from '../assets/skc_n.svg'
import drizzleSvg from '../assets/drizzle.svg'
import rainySvg from '../assets/rainy.svg'
import snowySvg from '../assets/snowy.svg'
import thunderSvg from '../assets/thunder.svg'


const ForecastWeather = ({day, today, date, nextday, data}) => {


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

    return (
        <div className='card'>
            <div className='card__title'>{day === today ? 'Сегодня' : day === nextday ? 'Завтра' : `${date}, ${day}`}</div>
            <div className='card__items'>
                <Swiper 
                    spaceBetween = {50} 
                    slidesPerView = {1}
                    initialSlide = {4}
                    breakpoints = {{
                        600 : {slidesPerView:4}
                    }}
                >
                    {
                        data.map(elem =>  <SwiperSlide key={elem.time}>
                            <div className='weather'>
                                <div className='time'>{`${date}, ${elem.time}`}</div>
                                <div className='info'>
                                    <div>
                                        <img src={icon(elem.weather.main, elem.time)} alt="" />
                                    </div>
                                    <div className='temp'>{elem.temp}°C</div>
                                </div>
                                <div>
                                    <p className='description'>{elem.weather.description}</p>
                                    <span className='description'>Ощущается как: {elem.feels_like}°C</span>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default ForecastWeather