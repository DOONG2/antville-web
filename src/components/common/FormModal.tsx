import styled from '@emotion/styled'
import { RefObject, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { grey030, grey050 } from '../../lib/styles/colors'
import media from '../../lib/styles/media'
import CloseIcon from '../../static/svg/CloseIcon'
import CloseIconSmall from '../../static/svg/CloseIconSmall'
import HeaderLogo from '../../static/svg/HeaderLogo'

interface ModalProps {
  children: React.ReactNode
  shown: boolean
  width: string
  height: string
  close: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  modalParentRef: RefObject<HTMLDivElement>
}

const Modal = ({
  children,
  shown,
  width,
  height,
  close,
  modalParentRef,
}: ModalProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 })

  useEffect(() => {
    modalParentRef.current?.scrollTo(0, 0)
  }, [shown])
  return (
    <>
      {shown && (
        <>
          <ModalOverlay shown={shown} onClick={close} />
          <Wrapper
            ref={modalParentRef}
            shown={shown}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalInner
              width={isMobile ? '100vw' : width}
              height={isMobile ? '100vh' : height}
            >
              <Header>
                <LogoWrapper>
                  {isMobile && <HeaderLogo width={81} height={15} />}
                </LogoWrapper>
                <RightItem onClick={close}>
                  {isMobile ? <CloseIconSmall /> : <CloseIcon />}
                </RightItem>
              </Header>
              {children}
            </ModalInner>
          </Wrapper>
        </>
      )}
    </>
  )
}

const ModalOverlay = styled.div<{ shown: boolean }>`
  display: ${(props) => (props.shown ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #424242;
  opacity: 0.4;
  z-index: 999;
`

const Wrapper = styled.div<{ shown: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: inherit;
  outline: 0;
  overflow: overlay;
  ::-webkit-scrollbar {
    width: 5px; /*스크롤바의 너비*/
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${grey050}; /*스크롤바의 색상*/
    border-radius: 7px;
  }
  background-color: #fff;

  box-shadow: 0px 4px 14px rgba(32, 32, 32, 0.12),
    0px 1.6711px 5.84887px rgba(32, 32, 32, 0.0862625),
    0px 0.893452px 3.12708px rgba(32, 32, 32, 0.0715329),
    0px 0.500862px 1.75302px rgba(32, 32, 32, 0.06),
    0px 0.266004px 0.931014px rgba(32, 32, 32, 0.0484671),
    0px 0.11069px 0.387416px rgba(32, 32, 32, 0.0337375);

  border-radius: 10px;
  ${media.medium} {
    border-radius: 0;
    box-shadow: none;
  }

  display: ${(props) => (props.shown ? 'block' : 'none')};
`

const ModalInner = styled.div<{
  width: string
  height: string
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  margin: 0 auto;
  padding-top: 25px;
  ${media.medium} {
    padding-top: 0;
  }

  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  ${media.medium} {
    border-top: 0.5px solid ${grey030};
    border-bottom: 0.5px solid ${grey030};
  }

  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const RightItem = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
  margin-right: 25px;
`

const LogoWrapper = styled.div``

export default Modal
