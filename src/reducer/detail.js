import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import IssuesAPI from 'apis/issues.api'

const initialState = {
	detail: null,
	getDetailState: {
		loading: false,
		done: false,
		err: null,
	},
}

export const getDetail = createAsyncThunk('/issue/getDetail', async IssueId => {
	const res = await IssuesAPI.getDetailIssue(IssueId)
	return res.data
})

export const detailSlice = createSlice({
	name: 'detail',
	initialState,
	extraReducers: builder => {
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
	},
})
