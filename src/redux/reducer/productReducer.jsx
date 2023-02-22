const initialState = {
    product: [],
    myProduct: []
}

const productReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'GET_PRODUCT_SUCESS':
            return{
                ...state,
                product: action.payload.data.data
            };
        case 'GET_MYPRODUCT_SUCESS':
            return{
                ...state,
                myProduct: action.payload.data.data
            };
    
        default:
            return state;
    }
}

export default productReducer