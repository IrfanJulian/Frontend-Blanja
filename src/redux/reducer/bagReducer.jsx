const initialState = {
    bag: []
}

const bagReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MYBAG_SUCCESS':
            return {
                ...state,
                bag: action.payload.data.data[0]
            }
    
        default:
            return state;
    }
}

export default bagReducer