import axiosInstance from './@core'

const IssuesAPI = {
	getIssuesLists() {
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
