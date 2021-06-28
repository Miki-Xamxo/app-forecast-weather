import React from "react"
import { useDispatch, useSelector } from 'react-redux'

import 'swiper/swiper-bundle.css';

import { getDataWeather, setCityName } from "../redux/actions/weather";
import { ForecastWeather, ListPoup } from "../components";
import { setInputValue } from "../redux/actions/input-value";

const Home = () => {

    const {items, cityName} = useSelector(({weather}) => weather)
    const { isFetching, visiblePopup} = useSelector(({ cities }) => cities)
    
    const dispatch = useDispatch()

    React.useEffect(() => {
        if(cityName){
            dispatch(getDataWeather(cityName))
        }
    }, [cityName])



    const onClickSearchCity = (city) => {
        dispatch(setCityName(city))
        dispatch(setInputValue(''))
    }

    console.log('render home')

    return (
        <div className='main'>
            <div className='container'>
                
                {
                    visiblePopup && !isFetching  && <ListPoup   onClickSearchCity={onClickSearchCity} />
                }
                <div className='title'>{cityName}</div>
                {
                    items.map((item, _, arr) => 
                        <ForecastWeather 
                            key={item.day}
                            today={arr[0].day}
                            nextday={arr[1].day}
                            date={item.date}
                            day={item.day}
                            data={item.data} 
                        />)
                }
            </div>
        </div>
    )
}

export default Home