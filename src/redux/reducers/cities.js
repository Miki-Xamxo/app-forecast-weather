const initialState = {
    city: [],
    visiblePopup: false,
    isFetching: false
}

const cities = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CITIES':
            return {
                ...state,
                city: [...action.payload],
                isFetching: false
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.payload
            }
        case 'SET_VISIBLE_POPUP':
            return {
                ...state,
                visiblePopup: action.payload
            }
        default:
            return state
    }
}


export default cities