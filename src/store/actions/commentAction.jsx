import axios from "axios";

export const getPostComment = (postId) => async dispatch => {
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

        dispatch({
            type: "GET_POST_COMMENT",
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

export const getAllComments = () => async dispatch => {
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments`)

        dispatch({
            type: "GET_ALL_COMMENTS",
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