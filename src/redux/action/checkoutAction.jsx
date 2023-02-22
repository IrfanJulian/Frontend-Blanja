import axios from "axios";

export const getCheckout = (id) => async(dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}checkout/myorder/${id}`
        })
        dispatch({ type: 'GET_CHECKOUT_SUCCESS', payload: res })
    } catch (error) {
        console.log(error);
        dispatch({ type: 'GET_CHECKOUT_FAILED' })
    }
} 