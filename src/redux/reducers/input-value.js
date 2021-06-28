
const initialState = {
    value: ''
}

const inputValue = (state = initialState, action) => {
    switch(action.type){
        case 'SET_INPUT_VALUE':
            return {
                ...state,
                value: action.payload
            }
        default:
            return state
    }
}

export default inputValue