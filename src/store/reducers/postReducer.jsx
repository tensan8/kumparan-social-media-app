const initialState = {
    posts: []
}

const postReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case "GET ALL":
            return{
                ...state,
                posts: [payload]
            }
        default:
            return{
                ...state
            }
    }
}

export default postReducer;