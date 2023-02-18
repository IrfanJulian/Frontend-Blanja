import axios from "axios";

export const getProduct = (keyword, page) => async(dispatch) => {
    try {
        const res = await axios({
            method: `GET`,
            url: `${process.env.REACT_APP_API}products?page=${page}?search=${keyword}`
        })
        dispatch({ type: 'GET_PRODUCT_SUCESS', payload: res })
    } catch (error) {
        dispatch({ type: 'GET_PRODUCT_FAILED' })
        console.log(error);
    }
}