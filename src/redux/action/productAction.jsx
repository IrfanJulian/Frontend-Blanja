import axios from "axios";

export const getProduct = (page) => async(dispatch) => {
    try {
        const res = await axios({
            method: `GET`,
            url: `${process.env.REACT_APP_API}products?page=${page}`
        })
        dispatch({ type: 'GET_PRODUCT_SUCESS', payload: res })
    } catch (error) {
        dispatch({ type: 'GET_PRODUCT_FAILED' })
        console.log(error);
    }
};

export const getMyProduct = (id) => async(dispatch) => {
    try {
        const res = await axios({
            method: `GET`,
            url: `${process.env.REACT_APP_API}products/myproduct/${id}`
        })
        dispatch({ type: 'GET_MYPRODUCT_SUCESS', payload: res })
    } catch (error) {
        dispatch({ type: 'GET_MYPRODUCT_FAILED' })
        console.log(error);
    }
};