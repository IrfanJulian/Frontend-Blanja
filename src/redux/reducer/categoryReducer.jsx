const initialState = {
    category: []
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORY_SUCCESS':
            return{
                ...state,
                category: action.payload.data.data
            }
    
        default:
            return state;
    }
}

export default categoryReducer