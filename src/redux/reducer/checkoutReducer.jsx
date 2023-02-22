const initialState = {
    checkout: []
}

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_CHECKOUT':
            return{
                ...state,
                checkout: action.payload.data.data
            }
    
        default:
           return state;
    }
}

export default checkoutReducer