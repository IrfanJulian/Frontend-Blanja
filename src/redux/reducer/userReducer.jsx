const initialState = {
    user: {}
}

const userReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'GET_PROFILE':
            return {
                ...state,
                user: action.payload.data.data[0]
            }
        default:
            return state;
    }
}

export default userReducer