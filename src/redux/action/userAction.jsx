import axios from "axios";

export const getDataUser = (id) => async(dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}user/${id}`
        })
        dispatch({ type: 'GET_PROFILE', payload: res })
    } catch (error) {
        dispatch({ type: 'GET_PROFIL_FAILED'})
        console.log(error);
    }
}