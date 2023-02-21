import axios from "axios";

const id = localStorage.getItem('id')

export const getMybag = () => async(dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}mybag/${id}`
        })
            dispatch({ type: 'GET_MYBAG_SUCCESS', payload: res })
        } catch (error) {
            dispatch({ type: 'GET_MYBAG_FAILED' })
            console.log(error);
        
    }
}