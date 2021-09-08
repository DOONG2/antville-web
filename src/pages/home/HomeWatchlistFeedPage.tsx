import useInfinitePosts from './hooks/useInfinitePosts'
import WatchListEmpty from '../../components/feed/empty/WatchlistEmpty'
import FeedSection from '../../components/feed/FeedSection'
import FeedTab from '../../components/feed/FeedTab'
import PostForm from '../../components/post/PostForm'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'
import { HomePageProps } from './type'
import { activated_watchlist, post_query_key } from '../../lib/variable'
import usePageView from '../../components/common/hooks/usePageView'
import { Wrapper } from '../../lib/styles/feed'

function WatchlistFeedPage({ id }: HomePageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: [post_query_key, id, { page: activated_watchlist }],
    callback: (cursor) => getPostsByUrl(activated_watchlist, cursor),
  })
  usePageView('홈/관심종목')
  if (!posts) return <></>
  return (
    <>
      <Wrapper>
        <PostForm extended={true} />
      </Wrapper>
      <Wrapper>
        <FeedTab />
        <FeedSection
          sectionKey={`watchlist-${id}`}
          posts={posts}
          loading={isLoading}
          emptyComponent={<WatchListEmpty />}
        />
      </Wrapper>
    </>
  )
}

export default WatchlistFeedPage
