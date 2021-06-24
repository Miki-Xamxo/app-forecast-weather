import * as axios from 'axios';

export const weatherUrl = {
    getWeather(cityName) {
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName !== '' ? cityName : ''}&units=metric&lang=ru&appid=9564702c3543cd18a286664bcd09dcac`) 
    }
}
