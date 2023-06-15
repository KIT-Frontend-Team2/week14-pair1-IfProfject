import axiosInstance from './@core'
const qs = require('qs')
const IssuesAPI = {
	getIssuesLists(queryString = null) {
		if (queryString) {
			let searchObj = JSON.parse(
				'{"' +
					decodeURI(queryString)
						.replace(/"/g, '\\"')
						.replace(/&/g, '","')
						.replace(/=/g, '":"') +
					'"}',
			)
			return axiosInstance.get('', { params: searchObj })
		}
		return axiosInstance.get()
	},

	getDetailIssue(IssueId) {
		return axiosInstance.get(`/${IssueId}`)
	},

	getDetailIssueComments(IssueId) {
		return axiosInstance.get(`${IssueId}/comments`)
	},
}

export default IssuesAPI
