import axios from 'axios';

export const getAllPosts = () => async dispatch => {
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

        dispatch({
            type: "GET_ALL",
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

export const getSinglePost = (postId) => async dispatch => {
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

        dispatch({
            type: "GET_POST",
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