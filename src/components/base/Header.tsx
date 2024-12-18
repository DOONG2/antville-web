import styled from '@emotion/styled'
import { LoginButton, SignUpButton } from '../../lib/styles/buttons'
import AuthSignUpForm from '../auth/AuthSignUpForm'
import AuthLoginForm from '../auth/AuthLoginForm'
import { useRootState } from '../common/hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import SearchBar from '../search/Search'
import HeaderLogo from '../../static/svg/HeaderLogo'
import NoticeIcon from '../../static/svg/NoticeIcon'
import ProfileIcon from '../../static/svg/ProfileIcon'
import useOnClickOutside from '../common/hooks/useOnClickOutside'
import useElementSize from '../common/hooks/useElementSize'
import React, { useRef } from 'react'
import HeaderUserDropDown from './HeaderUserDropDown'
import HeaderNoticeDropDown from './HeaderNoticeDropDown'
import DropDown from '../common/DropDown'
import Modal from '../common/FormModal'

function Header() {
  const user = useRootState((state) => state.user)
  const {
    setIsOpenLoginForm,
    setIsOpenSignUpForm,
    setIsOpenProfileDropDown,
    setIsOpenNoticeDropDown,
  } = viewSlice.actions
  const {
    isOpenLoginForm,
    isOpenSignUpForm,
    isOpenProfileDropDown,
    isOpenNoticeDropDown,
  } = useRootState((state) => state.view)
  const dispatch = useDispatch()
  const history = useHistory()

  const ProfileRef = useOnClickOutside({
    close: () => {
      dispatch(setIsOpenProfileDropDown(false))
    },
    isOpen: isOpenProfileDropDown,
  })
  const NoticeRef = useOnClickOutside({
    close: () => {
      dispatch(setIsOpenNoticeDropDown(false))
    },
    isOpen: isOpenNoticeDropDown,
  })

  const IconWrapperRef = useRef<HTMLDivElement>(null)
  const modalParentRef = useRef<HTMLDivElement>(null)

  const { height } = useElementSize(IconWrapperRef)

  return (
    <Wrapper>
      <HeaderWrapper isLoggedIn={user !== null}>
        <LogoWrapper
          onClick={() => {
            history.push('/')
          }}
        >
          <HeaderLogo width={180} height={34} />
        </LogoWrapper>
        <SearchBar />
        <ButtonWrapper>
          {user ? (
            <IconWrapper ref={IconWrapperRef}>
              <NoticeWrapper
                onClick={() => {
                  dispatch(setIsOpenNoticeDropDown(!isOpenNoticeDropDown))
                }}
                ref={NoticeRef}
              >
                <NoticeIcon />
                <DropDown
                  shown={isOpenNoticeDropDown}
                  parentHeight={height}
                  placement={'Right'}
                >
                  <HeaderNoticeDropDown id={user.id} />
                </DropDown>
              </NoticeWrapper>
              <ProfileWrapper
                onClick={() =>
                  dispatch(setIsOpenProfileDropDown(!isOpenProfileDropDown))
                }
                ref={ProfileRef}
              >
                <ProfileIcon />
                <DropDown
                  shown={isOpenProfileDropDown}
                  parentHeight={height}
                  placement={'Right'}
                >
                  <HeaderUserDropDown
                    close={() => {
                      dispatch(setIsOpenProfileDropDown(false))
                    }}
                  />
                </DropDown>
              </ProfileWrapper>
            </IconWrapper>
          ) : (
            <>
              <NewLoginButton
                onClick={() => dispatch(setIsOpenLoginForm(true))}
              >
                로그인
              </NewLoginButton>
              <Modal
                modalParentRef={modalParentRef}
                shown={isOpenLoginForm}
                width="447px"
                height="541px"
                close={() => {
                  dispatch(setIsOpenLoginForm(false))
                }}
              >
                <AuthLoginForm />
              </Modal>
              <NewSignUpButton
                onClick={() => dispatch(setIsOpenSignUpForm(true))}
              >
                가입하기
              </NewSignUpButton>
              <Modal
                modalParentRef={modalParentRef}
                shown={isOpenSignUpForm}
                width="447px"
                height="774px"
                close={() => {
                  dispatch(setIsOpenSignUpForm(false))
                }}
              >
                <AuthSignUpForm />
              </Modal>
              {/* <Modal
                modalParentRef={modalParentRef}
                shown={isOpenFindPasswordForm}
                width="447px"
                height="468px"
                close={() => {
                  dispatch(setIsOpenFindPasswordForm(false))
                }}
              >
                <FindPasswordForm />
              </Modal> */}
            </>
          )}
        </ButtonWrapper>
      </HeaderWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 1440px;
  background-color: #fff;
  border-bottom: 0.5px solid #e0e0e0;
`

const HeaderWrapper = styled.nav<{ isLoggedIn: boolean }>`
  width: 1440px;
  height: 117px;
  display: flex;
  justify-content: ${(props) =>
    props.isLoggedIn ? 'normal' : 'space-between'};
  align-items: center;
  padding: 0 25px;
  margin: 0 auto;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const ButtonWrapper = styled.div``

const NewLoginButton = styled(LoginButton)`
  margin-left: 34px;
`

const NewSignUpButton = styled(SignUpButton)`
  margin-left: 16px;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`

const NoticeWrapper = styled.div`
  margin-left: 26px;
  cursor: pointer;
`

const ProfileWrapper = styled.div`
  margin-left: 26px;
  cursor: pointer;
`

export default Header
