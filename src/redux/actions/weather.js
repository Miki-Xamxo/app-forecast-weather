import {weatherUrl} from '../../api/api'

const setDataWeather = (items) => ({ type: 'SET_DATA_WEATHER', payload: items})
export const setCityName = (cityName) => ({ type: 'SET_CITY_NAME', payload: cityName })

export const getDataWeather = (cityName) => async (dispatch) => {
    const resp = await weatherUrl.getWeather(cityName)
    dispatch(setDataWeather(resp.data))
}