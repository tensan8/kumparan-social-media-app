import axios from 'axios'

export const AllPostQuery = async (): Promise<any> => {
  try {
    return await axios.get('https://jsonplaceholder.typicode.com/posts')
  } catch (e) {
    console.log(e)
  }
}
