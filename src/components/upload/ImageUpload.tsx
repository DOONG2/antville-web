import styled from '@emotion/styled'
import { ChangeEvent, useRef } from 'react'
import { gifDto } from '../../lib/api/post/types'
import PictureUploadIcon from '../../static/svg/PictureUploadIcon'

interface Props {
  setUploadImage(value: File | undefined): void
  setGifDto(value: gifDto | undefined): void
  setPreviewUrl(value?: string | ArrayBuffer): void
}

export default function ImageUpload({
  setUploadImage,
  setGifDto,
  setPreviewUrl,
}: Props) {
  const hiddenFileInput = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    if (!hiddenFileInput.current) return
    hiddenFileInput.current.value = ''
    hiddenFileInput.current.click()
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = e.target.files?.[0]
    if (fileUploaded === undefined) return
    setPreviewUrl(URL.createObjectURL(fileUploaded))
    setUploadImage(fileUploaded)
    setGifDto(undefined)

    if (e.target.files) e.target.files = null
  }

  return (
    <>
      <Input
        name="file"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        accept=".png, .jpg, .jpeg"
      />
      <PictureUploadIcon onClick={handleClick} />
    </>
  )
}

const Input = styled.input`
  display: none;
`
