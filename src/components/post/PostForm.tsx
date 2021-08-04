import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GifUploadButton from '../../static/svg/GifUploadButton'
import PictureUploadButton from '../../static/svg/PictureUploadButton'
import StockDownButton from '../../static/svg/StockDownButton'
import StockUpButton from '../../static/svg/StockUpButton'
import UserIcon from '../../static/svg/UserIcon'
import { useRootState } from '../common/hooks/useRootState'
import StockUpButtonClicked from '../../static/svg/StockUpButtonClicked'
import StockDownButtonClicked from '../../static/svg/StockDownButtonClicked'
import viewSlice from '../../reducers/Slices/view'
import ImageUpload from '../upload/ImageUpload'
import GifUpload from '../upload/GifUpload'
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
} from '../../lib/styles/post'
import usePostData from './hooks/usePostData'
import { GifDto } from '../../types/post'
import { Post } from '../../lib/api/types'
import PostEditor from './PostEditor'
import postSlice from '../../reducers/Slices/post'

interface Props {
  addPost?: (value?: Post) => void
}

const PostForm = ({ addPost }: Props) => {
  const {
    user,
    post: { body, isFocusInput },
  } = useRootState((state) => state)
  const { setIsOpenLoginForm } = viewSlice.actions
  const { setBody, setIsFocusInput } = postSlice.actions
  const [uploadImage, setUploadImage] = useState<File>()
  const [gifDto, setGifDto] = useState<GifDto>()
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null
  )
  const [isOnUp, setIsOnUp] = useState(false)
  const [isOnDown, setIsOnDown] = useState(false)
  const [sentiment, setSentiment] = useState<string>()

  const dispatch = useDispatch()

  const { postDataApi } = usePostData({ addPost })

  useEffect(() => {
    if (previewUrl !== null) dispatch(setIsFocusInput(true))
  }, [previewUrl])

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        postDataApi({ body, sentiment, gifDto, uploadImage })
        setUploadImage(undefined)
        dispatch(setIsFocusInput(false))
        setGifDto(undefined)
        dispatch(setBody(''))
        setPreviewUrl(null)
        setIsOnUp(false)
        setIsOnDown(false)
      }}
    >
      <FormInner>
        <UserIconWrapper>
          <UserIcon />
        </UserIconWrapper>
        <InputWrapper isFocus={isFocusInput}>
          {user ? (
            <>
              {user.isEmailVerified ? (
                <>
                  <PostEditor />
                  <PreviewImage
                    previewUrl={previewUrl}
                    setPreviewUrl={setPreviewUrl}
                    setGifDto={setGifDto}
                    setUploadImage={setUploadImage}
                  />
                  <PostInnerButtonsWrapper>
                    <PostItem
                      onClick={() => {
                        setIsOnUp(!isOnUp)
                        if (!isOnUp) {
                          setIsOnDown(false)
                          setSentiment('UP')
                        }
                      }}
                    >
                      {isOnUp ? <StockUpButtonClicked /> : <StockUpButton />}
                    </PostItem>
                    <PostItem
                      onClick={() => {
                        setIsOnDown(!isOnDown)
                        if (!isOnDown) {
                          setIsOnUp(false)
                          setSentiment('DOWN')
                        }
                      }}
                    >
                      {isOnDown ? (
                        <StockDownButtonClicked />
                      ) : (
                        <StockDownButton />
                      )}
                    </PostItem>
                    <PostItem>
                      <ImageUpload
                        setUploadImage={setUploadImage}
                        setGifDto={setGifDto}
                        setPreviewUrl={setPreviewUrl}
                      />
                    </PostItem>
                    <PostItem>
                      <GifUpload
                        setUploadImage={setUploadImage}
                        setGifDto={setGifDto}
                        setPreviewUrl={setPreviewUrl}
                      />
                    </PostItem>
                  </PostInnerButtonsWrapper>
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
                당신의 생각을 공유해주세요! ($ 태그 사용 후, 종목 입력)
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
        <SubmitButton
          type="submit"
          disabled={body.length < 1 || body === '<p><br></p>'}
        >
          게시
        </SubmitButton>
      </FormInner>
    </Form>
  )
}

export default PostForm