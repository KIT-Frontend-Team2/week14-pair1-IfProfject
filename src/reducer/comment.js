import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import IssuesAPI from 'apis/issues.api'

const initialState = {
	comments: [],
	getCommentState: {
		loading: false,
		done: false,
		err: null,
	},
}

export const getComment = createAsyncThunk(
	'/issue/getComment',
	async IssueId => {
		const res = await IssuesAPI.getDetailIssueComments(IssueId)
		return res.data
	},
)

export const commentSlide = createSlice({
	name: 'comment',
	initialState,
	extraReducers: builder => {
		builder.addCase(getComment.pending, state => {
			state.getCommentState.loading = true
			state.getCommentState.done = false
			state.getCommentState.err = null
		})
		builder.addCase(getComment.fulfilled, (state, action) => {
			state.comments = action.payload
			state.getCommentState.loading = false
			state.getCommentState.done = true
			state.getCommentState.err = null
		})
		builder.addCase(getComment.rejected, (state, action) => {
			state.getCommentState.loading = false
			state.getCommentState.done = true
			state.getCommentState.err = action.payload
		})
	},
})
