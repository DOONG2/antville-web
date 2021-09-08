import styled from '@emotion/styled'
import { useHistory } from 'react-router'
import { Comment } from '../../lib/api/comment/types'
import {
  FeedAvatar,
  FeedTop,
  FeedWrapper,
  LeftItem,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  RightItem,
  TopWrapper,
} from '../../lib/styles/feed'
import { AvatarImage } from '../../lib/styles/post'
import FeedBody from '../feed/FeedBody'
import MomentDateChange from '../common/MomentDateChange'
import UserIcon50 from '../../static/svg/UserIcon50'
import ImageComponent from '../feed/ImageComponent'
import CommentBottom from './CommentBottom'

interface Props {
  comments: Comment[]
  loading?: boolean
}

export default function CommentSection({ comments, loading }: Props) {
  const history = useHistory()

  if (!comments) return <></>

  return (
    <>
      {comments?.map((comment) => (
        <NewFeedWrapper key={`${comment.id}-feed-comment`}>
          <LeftItem>
            <FeedAvatar
              onClick={() =>
                history.push(`/user/${comment.author.nickname}/profile`)
              }
            >
              {comment.author.profileImg ? (
                <AvatarImage
                  src={comment.author.profileImg}
                  alt="profile_image"
                />
              ) : (
                <UserIcon50 />
              )}
            </FeedAvatar>
          </LeftItem>
          <RightItem>
            <TopWrapper>
              <FeedTop>
                <NickNameWrapper
                  onClick={() =>
                    history.push(`/user/${comment.author.nickname}/profile`)
                  }
                >
                  {comment.author.nickname}
                </NickNameWrapper>
                <PostTime>
                  <MomentDateChange time={comment.createdAt} />
                </PostTime>
              </FeedTop>
            </TopWrapper>
            <MiddleWrapper>
              <FeedBody body={comment.body} isDetail={true} />
              {comment.commentImgs[0] && (
                <ImageComponent url={comment.commentImgs[0].image.toString()} />
              )}
              {comment.gifImage?.gifUrl && (
                <ImageComponent url={comment.gifImage.gifUrl} isGif={true} />
              )}
            </MiddleWrapper>
            <CommentBottom comment={comment} />
          </RightItem>
        </NewFeedWrapper>
      ))}
    </>
  )
}

const NewFeedWrapper = styled(FeedWrapper)`
  display: flex;
`
