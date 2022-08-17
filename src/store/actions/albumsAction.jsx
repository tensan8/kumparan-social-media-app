import axios from "axios";

export const getUserAlbums = (userId) => async dispatch => {
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);

        dispatch({
            type: "GET_USER_ALBUMS",
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