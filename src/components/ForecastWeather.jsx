import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Weather } from './index';

const ForecastWeather = ({day, today, date, nextday, data}) => {

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
                            <Weather date={date} {...elem}/>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default ForecastWeather