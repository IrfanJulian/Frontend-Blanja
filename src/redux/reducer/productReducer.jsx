const initialState = {
    product: [],
    myProduct: [],
    pagination: {}
}

const productReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'GET_PRODUCT_SUCESS':
            return{
                ...state,
                product: action.payload.data.data,
                pagination: action.payload.data.pagination
            };
        case 'GET_MYPRODUCT_SUCESS':
            return{
                ...state,
                myProduct: action.payload.data.data,
                pagination: action.payload.data.pagination
            };
    
        default:
            return state;
    }
}

export default productReducer