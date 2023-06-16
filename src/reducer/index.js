import { combineReducers } from '@reduxjs/toolkit'
import { issueSlice } from './issue'
import { detailSlice } from './detail'
import { commentSlide } from './comment'

export const rootReducer = combineReducers({
	issue: issueSlice.reducer,
	detail: detailSlice.reducer,
	comment: commentSlide.reducer,
})
