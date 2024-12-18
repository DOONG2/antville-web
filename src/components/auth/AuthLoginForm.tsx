import React from 'react'
import styled from '@emotion/styled'
import { LoginButton } from '../../lib/styles/buttons'
import {
  FontBlue,
  FormFooterText,
  ValidatorLabel,
} from '../../lib/styles/texts'
import { grey030, grey050, navy040, red050 } from '../../lib/styles/colors'
import CompleteCheckIcon from '../../static/svg/CompleteCheckIcon'
import useLoginFormik from './hooks/useLoginFormik'
import { useEffect } from 'react'
import { useRootState } from '../common/hooks/useRootState'
import { useDispatch } from 'react-redux'
import viewSlice from '../../reducers/Slices/view'
import useAutoFocus from '../common/hooks/useAutoFocus'

function AuthLoginForm() {
  const {
    dirty,
    isValid,
    values,
    errors,
    touched,
    isValidating,
    initialValues,
    submitCount,
    handleSubmit,
    getFieldProps,
  } = useLoginFormik()
  const dispatch = useDispatch()
  const { isFailFindPasswordSubmit } = useRootState((state) => state.view)
  const { setIsFailLoginSubmit, setIsOpenFindPasswordForm } = viewSlice.actions

  const { isOpenLoginForm, isFailLoginSubmit } = useRootState(
    (state) => state.view
  )

  useEffect(() => {
    if (isValidating && submitCount > 0) {
      dispatch(setIsFailLoginSubmit(false))
    }
  }, [isValidating, isFailFindPasswordSubmit, submitCount])

  const ref = useAutoFocus({ watcher: isOpenLoginForm })

  return (
    <Wrapper>
      <Title>로그인</Title>
      <form onSubmit={handleSubmit}>
        <Item
          style={{
            borderBottomColor:
              (touched.emailLogin ||
                values.emailLogin !== initialValues.emailLogin) &&
              errors.emailLogin
                ? red050
                : grey030,
          }}
        >
          <Input
            id="emailLogin"
            type="email"
            {...getFieldProps('emailLogin')}
            placeholder={'아이디 (이메일 형식)'}
            ref={ref}
          />
          {(touched.emailLogin ||
            values.emailLogin !== initialValues.emailLogin) && (
            <>
              {errors.emailLogin ? (
                <NewValidatorLabel>{errors.emailLogin}</NewValidatorLabel>
              ) : (
                <ValidatorLabel>
                  <NewCompleteCheckIcon />
                </ValidatorLabel>
              )}
            </>
          )}
        </Item>
        <Item
          style={{
            borderBottomColor:
              (touched.passwordLogin ||
                values.passwordLogin !== initialValues.passwordLogin) &&
              errors.passwordLogin
                ? red050
                : grey030,
          }}
        >
          <Input
            id="passwordLogin"
            type="password"
            {...getFieldProps('passwordLogin')}
            placeholder={'비밀번호'}
          />
          {(touched.passwordLogin ||
            values.passwordLogin !== initialValues.passwordLogin) && (
            <>
              {errors.passwordLogin ? (
                <NewValidatorLabel>{errors.passwordLogin}</NewValidatorLabel>
              ) : (
                <ValidatorLabel>
                  <NewCompleteCheckIcon />
                </ValidatorLabel>
              )}
            </>
          )}
          {isFailLoginSubmit && (
            <NewValidatorLabel>
              가입되지 않은 아이디거나, 잘못된 비밀번호 입니다.
            </NewValidatorLabel>
          )}
        </Item>
        <CheckBoxWrapper>
          <SaveIdCheckBox
            type="checkbox"
            checked={values.saveIdLogin}
            {...getFieldProps('saveIdLogin')}
          />
          <CheckBoxLabel>계정 정보 기억하기</CheckBoxLabel>
        </CheckBoxWrapper>
        <ButtonWrapper>
          <NewLoginButton
            type="submit"
            disabled={!(dirty && isValid) || isFailLoginSubmit}
          >
            로그인
          </NewLoginButton>
        </ButtonWrapper>
      </form>
      <NewFormFooterText>
        <Text onClick={() => dispatch(setIsOpenFindPasswordForm(true))}>
          비밀번호 찾기
        </Text>
        <NewFontBlue>회원가입</NewFontBlue>
      </NewFormFooterText>
    </Wrapper>
  )
}

const Text = styled.div`
  cursor: pointer;
`

const Wrapper = styled.div`
  padding: 25px;
  margin-top: 22px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-align: left;

  color: #202020;
`

const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

  border-bottom: 0.5px solid #e0e0e0;
`

const CheckBoxWrapper = styled.div`
  margin-top: 44px;
  display: flex;
  align-items: center;
`

const NewLoginButton = styled(LoginButton)`
  padding: 10px 138px;
  border: ${(props) =>
    props.disabled ? `1px solid ${grey050}` : '1px solid #1942e0'};
  background: ${(props) => (props.disabled ? `${grey050}` : '#1942e0')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: #fff;
`

const NewFontBlue = styled(FontBlue)`
  cursor: pointer;
`

const CheckBoxLabel = styled.div`
  font-size: 12px;
  line-height: 22px;
  margin-left: 6px;

  color: #424242;
  display: inline;
`

const NewFormFooterText = styled(FormFooterText)`
  margin-top: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
`

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  outline: none;
  border: none;

  color: #202020;
  background-color: #fff;

  &::placeholder {
    color: #aeaeae;
  }
`

const SaveIdCheckBox = styled.input`
  width: 19px;
  height: 19px;

  outline: none;

  background-color: ${navy040};
  border: 1px solid #1942e0;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
`

const NewCompleteCheckIcon = styled(CompleteCheckIcon)`
  margin-right: 10px;
`

const NewValidatorLabel = styled(ValidatorLabel)`
  position: absolute;
  bottom: -5px;
  left: 0;
  transform: translate3d(0, 100%, 0);
`

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export default AuthLoginForm
