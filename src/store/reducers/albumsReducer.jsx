const initialState = {
  albums: []
}

const albumsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_USER_ALBUMS':
      return {
        ...state,
        albums: payload
      }
    default:
      return {
        ...state
      }
  }
}

export default albumsReducer
