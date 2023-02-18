import axios from "axios";

const id = localStorage.getItem('id')

export const getDataUser = () => async(dispatch) => {
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