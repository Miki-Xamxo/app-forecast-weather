import { cityUrl } from "../../api/api"

const setCities = (city) => ({ type: 'SET_CITIES', payload: city })
const toggleIsFetching = (isFetching) => ({ type: 'TOGGLE_IS_FETCHING', payload: isFetching })
export const setVisiblePopup = (visiblePopup) => ({ type: 'SET_VISIBLE_POPUP', payload: visiblePopup })

export const getCities = (city) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const resp = await cityUrl.getCity(city)
    dispatch(setCities(resp.data))
}