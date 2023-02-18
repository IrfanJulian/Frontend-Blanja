import axios from "axios";

const id = localStorage.getItem('id')
const token = localStorage.getItem('token')

export const getMybag = () => async(dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}mybag/${id}`,
            headers : { 
                authorization: `Bearer ${token}` 
            }})
            dispatch({ type: 'GET_MYBAG_SUCCESS', payload: res })
        } catch (error) {
            dispatch({ type: 'GET_MYBAG_FAILED' })
        
    }
}