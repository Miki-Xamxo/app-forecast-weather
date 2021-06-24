

const initialState = {
    items: [],
    cityName: '',
    isLoading: false

}


const findDay = (day, dayWeek) => {
    let date = new Date(day.dt_txt).toLocaleString("ru", {weekday: "long"});
    return date === dayWeek
}

const week = (arr) => {
    const result =  arr.reduce((arr, dayWeek) => {
        let weekday = new Date(dayWeek.dt_txt).toLocaleString("ru", {weekday: "long", month: 'long', day: 'numeric'});
        if(!arr.includes(weekday)){
            return [...arr, weekday]
        }
        return arr
    }, [])
    return result
}


const createArr = (arr) => {
    return(
        arr.map(( elem => {
            let time = new Date( elem.dt_txt ).toLocaleString("ru", {
            hour: "numeric",
            minute: "numeric" 
            });
            return {
                time,
                temp: Math.ceil(elem.main.temp), 
                feels_like: Math.ceil(elem.main.feels_like),
                weather: elem.weather[0]
                }
            } )
        )
    )
}

const weather = (state = initialState, action) => {
    switch(action.type){
        case 'SET_DATA_WEATHER':
            const newItems = week(action.payload.list).map(item => {
                const [week, date] = item.split(',')
                return {
                    day: week,
                    date: date,
                    data: createArr( action.payload.list.filter(day => findDay(day, week)))
                }
            })

            return {
                ...state,
                items: newItems,
                isLoading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        case 'SET_CITY':
            return {
                ...state,
                cityName: action.payload
            }
        default:
            return state
    }
}

export default weather