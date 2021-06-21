import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GifUploadButton from '../../assets/svg/GifUploadButton'
import PictureUploadButton from '../../assets/svg/PictureUploadButton'
import StockDownButton from '../../assets/svg/StockDownButton'
import StockUpButton from '../../assets/svg/StockUpButton'
import UserIcon from '../../assets/svg/UserIcon'
import { useRootState } from '../../hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import ImageUpload from '../Upload/ImageUpload'
import GifUpload from '../Upload/GifUpload'
import PreviewImage from './PreviewImage'
import {
  EmailCheck,
  Form,
  FormInner,
  InputWrapper,
  LockedLabel,
  NewFontBlue,
  PostInnerButtonsWrapper,
  PostItem,
  SubmitButton,
  UserIconWrapper,
} from '../../mds/styled/post'
import styled from '@emotion/styled'
import CommnetMEntionInput from './CommnetMEntionInput'

const NewPostInnerButtonsWrapper = styled(PostInnerButtonsWrapper)`
  column-gap: 12px;
`

const CommentForm = () => {
  const {
    user,
    post: {
      previewUrl,
      commentSubmitData: { body },
    },
  } = useRootState((state) => state)

  const [isFocusCommentInput, setIsFocusCommentInput] = useState<boolean>(false)

  const { setIsOpenLoginForm } = viewSlice.actions

  const dispatch = useDispatch()

  useEffect(() => {
    if (previewUrl !== null) setIsFocusCommentInput(true)
  }, [previewUrl])

  return (
    <Form
      onSubmit={(e) => {
        console.log(e.target)
      }}
    >
      <FormInner>
        <UserIconWrapper>
          <UserIcon />
        </UserIconWrapper>
        <InputWrapper isFocus={isFocusCommentInput}>
          {user ? (
            <>
              {user.isEmailVerified ? (
                <>
                  <CommnetMEntionInput
                    isFocusCommentInput={isFocusCommentInput}
                    setIsFocusCommentInput={setIsFocusCommentInput}
                  />
                  <PreviewImage />
                  <NewPostInnerButtonsWrapper>
                    <PostItem>
                      <ImageUpload />
                    </PostItem>
                    <PostItem>
                      <GifUpload />
                    </PostItem>
                  </NewPostInnerButtonsWrapper>
                </>
              ) : (
                <EmailCheck>
                  게시글 작성을 위해 이메일 인증을 완료해주세요.{' '}
                  <NewFontBlue>이메일 인증 요청하기</NewFontBlue>
                </EmailCheck>
              )}
            </>
          ) : (
            <>
              <LockedLabel onClick={() => dispatch(setIsOpenLoginForm(true))}>
                댓글을 입력해주세요.
              </LockedLabel>
              <PostInnerButtonsWrapper
                onClick={() => dispatch(setIsOpenLoginForm(true))}
              >
                <PostItem>
                  <StockUpButton />
                </PostItem>
                <PostItem>
                  <StockDownButton />
                </PostItem>
                <PostItem>
                  <PictureUploadButton />
                </PostItem>
                <PostItem>
                  <GifUploadButton />
                </PostItem>
              </PostInnerButtonsWrapper>
            </>
          )}
        </InputWrapper>

        <SubmitButton type="submit" disabled={body.length < 1}>
          게시
        </SubmitButton>
      </FormInner>
    </Form>
  )
}

export default CommentForm