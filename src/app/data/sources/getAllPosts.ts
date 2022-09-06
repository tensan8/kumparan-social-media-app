import axios from 'axios'
import { Dispatch } from 'redux'
import { PostDto } from './dtos/PostDto'

export const getAllPosts = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get<PostDto>('https://jsonplaceholder.typicode.com/posts')

    dispatch({
      type: 'GET_ALL',
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: 'ERROR',
      payload: console.log(e)
    })
  }
}
