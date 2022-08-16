const initialState = {
    comment: []
}

const commentReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case "GET_POST_COMMENT":
            return{
                ...state,
                comment: payload
            }
        case "GET_ALL_COMMENTS":    
            return{
                ...state,
                comment: payload
            }
        default:
            return{
                ...state
            }
    }
}

export default commentReducer;