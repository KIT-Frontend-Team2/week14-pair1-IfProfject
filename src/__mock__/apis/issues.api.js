import { rest } from 'msw'
import ISSUES_MOCK from '__mock__/datas/issuesList.data'
import API_CONST from 'consts/api'

export const getList = rest.get(
	API_CONST.BACKEND_URL + API_CONST.OWNER_REPO_TYPE,
	async (_, res, ctx) => {
		return res(ctx.status(200), ctx.json(ISSUES_MOCK.List))
	},
)

export const getDetail = rest.get(
	API_CONST.BACKEND_URL + API_CONST.OWNER_REPO_TYPE + '/:issuesId',
	async (_, res, ctx) => {
		return res(ctx.status(200), ctx.json(ISSUES_MOCK.Detail))
	},
)

export const getDetailComments = rest.get(
	API_CONST.BACKEND_URL + API_CONST.OWNER_REPO_TYPE + '/:issuesId/comments',
	async (_, res, ctx) => {
		return res(ctx.status(200), ctx.json(ISSUES_MOCK.DetailComments))
	},
)
