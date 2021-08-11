import FeedDetailInfo from '../../components/feed/detail/FeedDetailInfo'
import { FeedPageProps } from './type'
import useInfiniteComment from './hooks/useInfiniteComment'
import getCommentsById from '../../lib/api/comment/getCommentsById'
import CommentSection from '../../components/comment/CommentSection'
import CommentForm from '../../components/comment/CommentForm'
import { useRef } from 'react'

export default function FeedDetailPage({ id, post }: FeedPageProps) {
  const { isLoading, comments, setComments } = useInfiniteComment({
    key: `feed-detail-${id}`,
    callback: (cursor) => getCommentsById(id, cursor),
  })
  const inputRef = useRef<any>(null)

  if (!comments) return <></>

  return (
    <>
      <FeedDetailInfo post={post} inputRef={inputRef} />
      <CommentForm
        addComment={(comment) => {
          if (!comment) return
          setComments([comment].concat(comments))
        }}
        inputRef={inputRef}
      />
      <CommentSection comments={comments} loading={isLoading} />
    </>
  )
}
