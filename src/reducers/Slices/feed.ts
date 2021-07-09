import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCommentsByIdResponse } from '../../api/comment/types'
import { Post } from '../../api/types'
import {
  activated_all,
  activated_following,
  activated_watchlist,
} from '../../lib/variable'
import { Feed } from '../../types/feed'

type FeedState = Feed

const initialState = {
  activatedTab: 'all',
  posts: null,
  comments: null,
  stockId: undefined,
} as FeedState

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setTabAll(state) {
      state.activatedTab = activated_all
      state.posts = null
    },
    setTabWatchList(state) {
      state.activatedTab = activated_watchlist
      state.posts = null
    },

    setTabFollowing(state) {
      state.activatedTab = activated_following
      state.posts = null
    },
    setPosts(state, action: PayloadAction<Post[] | undefined | null>) {
      if (action.payload === undefined) return
      state.posts = action.payload
    },
    setComments(
      state,
      action: PayloadAction<getCommentsByIdResponse | null | undefined>
    ) {
      if (action.payload === undefined) return
      state.comments = action.payload
    },
    setStockId(state, action: PayloadAction<number>) {
      state.stockId = action.payload
    },
  },
})

export default feedSlice
