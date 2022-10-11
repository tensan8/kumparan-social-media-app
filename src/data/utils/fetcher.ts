import axios from 'axios'
import { normalize, schema } from 'normalizr'
import { path } from 'ramda'

export const fetcher = async (url: string, schema: schema.Entity): Promise<any> => {
  try {
    const res = await axios.get(url).then(res => res.data)
    const data = path(['entities', schema.key], normalize(res, [schema])) ?? {}
    return data
  } catch (e) {
    console.log(e)
  }
}
