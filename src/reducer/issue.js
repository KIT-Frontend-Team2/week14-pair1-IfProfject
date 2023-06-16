import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import IssuesAPI from 'apis/issues.api'

const initialState = {
	issues: [],
	getIssueState: {
		loading: false,
		done: false,
		err: null,
	},
	detail: null,
	getDetailState: {
		loading: false,
		done: false,
		err: null,
	},
	comments: [],
	getCommentState: {
		loading: false,
		done: false,
		err: null,
	},
}

export const getIssue = createAsyncThunk(
	'/issue/getIssue',
	async searchParam => {
		const res = await IssuesAPI.getIssuesLists(searchParam)
		return res.data
	},
)

export const getDetail = createAsyncThunk('/issue/getDetail', async IssueId => {
	const res = await IssuesAPI.getDetailIssue(IssueId)
	return res.data
})

export const getComment = createAsyncThunk(
	'/issue/getComment',
	async IssueId => {
		const res = await IssuesAPI.getDetailIssueComments(IssueId)
		return res.data
	},
)

export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	extraReducers: builder => {
		// 목록
		builder.addCase(getIssue.pending, state => {
			state.getIssueState.loading = true
			state.getIssueState.done = false
			state.getIssueState.err = null
		})
		builder.addCase(getIssue.fulfilled, (state, action) => {
			state.issues = action.payload
			state.getIssueState.loading = false
			state.getIssueState.done = true
			state.getIssueState.err = null
		})
		builder.addCase(getIssue.rejected, (state, action) => {
			state.getIssueState.loading = false
			state.getIssueState.done = true
			state.getIssueState.err = action.payload
		})
		// 상세
		builder.addCase(getDetail.pending, state => {
			state.getDetailState.loading = true
			state.getDetailState.done = false
			state.getDetailState.err = null
		})
		builder.addCase(getDetail.fulfilled, (state, action) => {
			state.detail = action.payload
			state.getDetailState.loading = false
			state.getDetailState.done = true
			state.getDetailState.err = null
		})
		builder.addCase(getDetail.rejected, (state, action) => {
			state.getDetailState.loading = false
			state.getDetailState.done = true
			state.getDetailState.err = action.payload
		})
		// 댓글
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
