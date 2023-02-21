import axios from "axios";

export const getProduct = () => async(dispatch) => {
    try {
        const res = await axios({
            method: `GET`,
            url: `${process.env.REACT_APP_API}products`
        })
        dispatch({ type: 'GET_PRODUCT_SUCESS', payload: res })
    } catch (error) {
        dispatch({ type: 'GET_PRODUCT_FAILED' })
        console.log(error);
    }
}