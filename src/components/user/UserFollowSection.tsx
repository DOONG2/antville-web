import { User } from '../../lib/api/types'
import { Item, Nickname, Wrapper } from '../../lib/styles/user'
import { useHistory } from 'react-router-dom'
import { FeedAvatar } from '../../lib/styles/feed'
import UserIcon50 from '../../static/svg/UserIcon50'
import { useDispatch } from 'react-redux'
import viewSlice from '../../reducers/Slices/view'
import optimizeImage from '../../lib/utils/optimizeImage'
import { AvatarImage } from '../../lib/styles/post'
import { grey030 } from '../../lib/styles/colors'
import { useMediaQuery } from 'react-responsive'
import UserIcon30 from '../../static/svg/UserIcon30'

type Prop = {
  users: User[]
  isLoading: boolean
  elementKey: string
  emptyComponent?: React.ReactNode
  setUsers(users: User[] | undefined): void
}

export default function UserFollowSection({
  users,
  isLoading,
  emptyComponent,
  elementKey,
  setUsers,
}: Prop) {
  const { setIsOpenFollwerModal, setIsOpenFollowingModal } = viewSlice.actions
  const history = useHistory()
  const dispatch = useDispatch()

  const isMobile = useMediaQuery({ maxWidth: 1024 })

  return (
    <Wrapper style={{ borderTop: isMobile ? '' : `0.5px solid ${grey030}` }}>
      {users.map((user) => (
        <Item
          key={elementKey + user.id}
          onClick={() => {
            dispatch(setIsOpenFollwerModal(false))
            dispatch(setIsOpenFollowingModal(false))
            setUsers(undefined)
            history.push(`/user/${user.nickname}/profile`)
          }}
        >
          <FeedAvatar
            onClick={() => {
              dispatch(setIsOpenFollwerModal(false))
              dispatch(setIsOpenFollowingModal(false))
              setUsers(undefined)
              history.push(`/user/${user.nickname}/profile`)
            }}
          >
            {user.profileImg ? (
              <AvatarImage
                src={optimizeImage(user.profileImg, 120)}
                alt="profile_image"
              />
            ) : isMobile ? (
              <UserIcon30 />
            ) : (
              <UserIcon50 />
            )}
          </FeedAvatar>
          <Nickname>{user.nickname}</Nickname>
        </Item>
      ))}
    </Wrapper>
  )
}
