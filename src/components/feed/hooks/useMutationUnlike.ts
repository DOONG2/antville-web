import { InfiniteData, useMutation, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { Comment } from '../../../lib/api/comment/types'
import { Post } from '../../../lib/api/types'
import {
  comment_query_key,
  post_query_key,
  sub_comment_query_key,
} from '../../../lib/variable'
import { useRootState } from '../../common/hooks/useRootState'
import useGetRoutePath from './useGetPath'

type Props = {
  callback: () => Promise<any>
  queryKey: string
  keyId?: string
}

type MutationProps = {
  id: number
  parentId?: string
}

export default function useMutationUnlike({
  callback,
  queryKey,
  keyId,
}: Props) {
  const queryClient = useQueryClient()
  const user = useRootState((state) => state.user)
  const pathname = useGetRoutePath()
  const { id: commentKeyId } = useParams<{ id: string }>()

  const mutation = useMutation(callback, {
    onMutate: async ({ id, parentId }: MutationProps) => {
      let key
      let previousQuery
      switch (queryKey) {
        case post_query_key:
          key = keyId
            ? [post_query_key, keyId, { page: pathname }]
            : [post_query_key, String(user!.id), { page: pathname }]
          await queryClient.cancelQueries(key)
          previousQuery = queryClient.getQueryData<InfiniteData<Post[]>>(key)
          if (previousQuery) {
            const data = {
              pages: previousQuery.pages.flat(),
              pageParams: previousQuery.pageParams,
            }
            const findIndex = data.pages.findIndex((obj) => obj.id === id)
            const postCount = data.pages[findIndex].postCount
            data.pages[findIndex] = {
              ...data.pages[findIndex],
              isLikedSelf: false,
              postCount: { ...postCount, likeCount: postCount.likeCount - 1 },
            }
            queryClient.setQueriesData(key, data)
          }
          break
        case comment_query_key:
          key = [comment_query_key, commentKeyId]
          await queryClient.cancelQueries(key)
          previousQuery = queryClient.getQueryData<InfiniteData<Comment[]>>(key)
          if (previousQuery) {
            const data = {
              pages: previousQuery.pages.flat(),
              pageParams: previousQuery.pageParams,
            }
            const findIndex = data.pages.findIndex((obj) => obj.id === id)
            const commentCount = data.pages[findIndex].commentCount
            data.pages[findIndex] = {
              ...data.pages[findIndex],
              isLikedSelf: false,
              commentCount: {
                ...commentCount,
                likeCount: commentCount.likeCount - 1,
              },
            }
            queryClient.setQueriesData(key, data)
          }
          break
        case sub_comment_query_key:
          key = [sub_comment_query_key, parentId]
          await queryClient.cancelQueries(key)
          previousQuery = queryClient.getQueryData<InfiniteData<Comment[]>>(key)
          if (previousQuery) {
            const data = {
              pages: previousQuery.pages.flat(),
              pageParams: previousQuery.pageParams,
            }
            const findIndex = data.pages.findIndex((obj) => obj.id === id)
            const commentCount = data.pages[findIndex].commentCount
            data.pages[findIndex] = {
              ...data.pages[findIndex],
              isLikedSelf: false,
              commentCount: {
                ...commentCount,
                likeCount: commentCount.likeCount - 1,
              },
            }
            queryClient.setQueriesData(key, data)
          }
          break
      }
    },
  })
  return { mutation }
}
