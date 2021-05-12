import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { postOptions } from '../../types/post'

type postState = postOptions

const initialState = {
  isUp: false,
  isDown: false,
} as postState

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setIsUp(state, action: PayloadAction<boolean>) {
      state.isUp = action.payload
      state.isDown = false
    },
    setIsDown(state, action: PayloadAction<boolean>) {
      state.isUp = false
      state.isDown = action.payload
    },
  },
})

export default postSlice
