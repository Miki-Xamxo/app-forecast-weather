import React from "react"
import { useDispatch, useSelector } from 'react-redux'

import 'swiper/swiper-bundle.css';

import { getDataWeather, setCity } from "../redux/actions/weather";
import { ForecastWeather } from "../components";


const Home = () => {

    const [value, setValue] = React.useState('')
    const {items, cityName,  isLoading} = useSelector(({weather}) => weather)
    
    const dispatch = useDispatch()


    React.useEffect(() => {
        if(cityName){
            dispatch(getDataWeather(cityName))
        }
    }, [cityName])

    const handleChangeValue = (e) => {
        let value = e.target.value
        setValue(value)
    }

    const onClickSearchCity = (e) => {
        e.preventDefault()
        dispatch(setCity(value))
        setValue('')
    }
    return (
        <div className='main'>
            <div className='container'>
                <form>
                    <input type="text" onChange={handleChangeValue} value={value} />
                    <button  onClick={onClickSearchCity} disabled={value === ''}>Поиск</button>
                </form>
                <div className='title'>{cityName}</div>
                {
                    items.map((item, _, arr) =>
                        <ForecastWeather 
                            key={item.day}
                            today={arr[0].day}
                            nextday={arr[1].day}
                            date={item.date}
                            day={item.day}
                            data={item.data} /> )
                }
            </div>
        </div>
    )
}

export default Home