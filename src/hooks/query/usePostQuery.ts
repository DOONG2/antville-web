import { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { Post } from '../../api/types'
import { cacheStableTime } from '../../lib/variable'
import feedSlice from '../../reducers/Slices/feed'
import { useRootState } from '../useRootState'

export interface PostFunction {
  (cursor?: any): Promise<Post[]>
}

interface Prop {
  callback: PostFunction
}

export default function usePostQuery({ callback }: Prop) {
  const {
    feed: { activatedTab },
  } = useRootState((state) => state)
  const { setPosts } = feedSlice.actions
  const dispatch = useDispatch()

  const {
    isLoading,
    data,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    [activatedTab],
    ({ pageParam: cursor }) => callback(cursor),
    {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    }
  )

  useEffect(() => {
    if (data && !isFetchingNextPage) {
      const arr: Post[] = []
      data.pages.map((posts) => arr.push(...posts))
      dispatch(setPosts(arr))
    }
  }, [data])

  return {
    isLoading,
    data,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
  }
}
