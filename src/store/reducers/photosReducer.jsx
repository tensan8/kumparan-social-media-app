const initialState = {
    photos: []
}

const photosReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case "GET_ALBUM_PHOTOS":
            return{
                ...state,
                photos: payload
            }
        case "RESET":
            return{
                ...state,
                photos: []
            }
        default:
            return{
                ...state
            }
    }
}

export default photosReducer;