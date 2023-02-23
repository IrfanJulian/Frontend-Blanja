import axios from "axios";

export const getCategory = (id) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}category/${id}`
        })
        dispatch({ type: 'GET_CATEGORY_SUCCESS', payload: res })
    } catch (error) {
        console.log(error);
    }
}