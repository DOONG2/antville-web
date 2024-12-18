import useInfinitePosts from '../home/hooks/useInfinitePosts'
import UserEmpty from '../../components/feed/empty/UserEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUser from '../../lib/api/post/getPostsByUser'
import { UserFeedPageProps } from './type'
import { activated_user, post_query_key } from '../../lib/variable'
import usePageView from '../../components/common/hooks/usePageView'
import HomeLoading from '../../components/home/HomeLoading'

function UserAllFeedPage({ user }: UserFeedPageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: [post_query_key, String(user.id), { page: activated_user }],
    callback: (cursor) => getPostsByUser(user.id, cursor),
  })
  usePageView('프로필/활동_내역')
  if (!posts) return <HomeLoading />
  return (
    <FeedSection
      sectionKey={`user-all-${user.id}`}
      posts={posts}
      loading={isLoading}
      emptyComponent={<UserEmpty />}
      keyId={String(user.id)}
    />
  )
}

export default UserAllFeedPage
