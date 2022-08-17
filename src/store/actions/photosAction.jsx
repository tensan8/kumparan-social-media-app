import axios from "axios";

export const getAlbumPhotos = (albumId) => async dispatch => {
    try{
        for(var i = 0; i < albumId.length; i++) {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId[i]}/photos`);

            dispatch({
                type: "GET_ALBUM_PHOTOS",
                payload: res.data
            })
        }
    }
    catch(e) {
        dispatch({
            type: "ERROR",
            payload: console.log(e)
        })
    }
}