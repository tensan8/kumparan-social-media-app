import axios from 'axios';

export const getUsersData = () => async dispatch => {
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)

        dispatch({
            type: "GET_USERS",
            payload: res.data
        })
    }
    catch(e) {
        dispatch({
            type: "ERROR",
            payload: console.log(e)
        })
    }
}