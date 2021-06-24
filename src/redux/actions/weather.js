import {weatherUrl} from '../../api/api'

const setDataWeather = (items) => ({ type: 'SET_DATA_WEATHER', payload: items})
export const setCity = (cityName) => ({ type: 'SET_CITY', payload: cityName })

export const getDataWeather = (cityName) => async (dispatch) => {
    const resp = await weatherUrl.getWeather(cityName)
    dispatch(setDataWeather(resp.data))
}