import { useEffect } from 'react'
import { usePosts } from '../../data/repositories/PostRepositoryImp'
import { PostModel } from '../../domain/models/PostModel'
import { ErrorState } from '../../domain/vo/ErrorState'

interface HomePageViewModel {
  posts: PostModel[] | null
  loading: boolean
  error?: ErrorState
}

export const useHomePageViewModel = (): HomePageViewModel => {
  const postRepostory = usePosts()
  const { result, getSpaces: _getSpaces } = postRepostory

  useEffect(() => {
    const getSpaces = async (): Promise<any> => {
      await _getSpaces()
    }
    getSpaces().catch(error => console.log('>>', { error }))
  }, [])

  return {
    posts: result.data,
    loading: result.loading,
    error: result.error
  }
}
