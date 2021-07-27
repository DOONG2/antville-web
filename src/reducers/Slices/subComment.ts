import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SubCommentState } from '../../lib/api/comment/types'

const initialState = {
  body: '',
  isFocusInput: false,
} as SubCommentState

const subCommentSlice = createSlice({
  name: 'subComment',
  initialState,
  reducers: {
    setBody(state, action: PayloadAction<string>) {
      state.body = action.payload
    },
    setIsFocusInput(state, action: PayloadAction<boolean>) {
      state.isFocusInput = action.payload
    },
  },
})

export default subCommentSlice
