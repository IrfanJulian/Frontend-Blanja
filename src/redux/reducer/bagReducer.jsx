const initialState = {
    bag: []
}

const bagReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MYBAG_SUCCESS':
            return {
                ...state,
                bag: action.payload.data.data
            }
    
        default:
            return state;
    }
}

export default bagReducer