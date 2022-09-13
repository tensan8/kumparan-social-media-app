import axios from 'axios'

export const fetcher = async (url: string): Promise<any> => {
  try {
    return await axios.get(url).then(res => res.data)
  } catch (e) {
    console.log(e)
  }
}
