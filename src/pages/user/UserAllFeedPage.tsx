import useInfinitePosts from '../home/hooks/useInfinitePosts'
import UserEmpty from '../../components/feed2/empty/UserEmpty'
import FeedSection from '../../components/feed2/FeedSection'
import getPostsByUser from '../../lib/api/post/getPostsByUser'
import { UserFeedPageProps } from './type'

function UserAllFeedPage({ user }: UserFeedPageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: `user-all-${user.id}`,
    callback: (cursor) => getPostsByUser(user.id, cursor),
  })
  if (!posts) return <></>
  return (
    <FeedSection
      sectionKey={`user-all-${user.id}`}
      posts={posts}
      loading={isLoading}
      emptyComponent={<UserEmpty />}
    />
  )
}

export default UserAllFeedPage
