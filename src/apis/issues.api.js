import axiosInstance from './@core'

const IssuesAPI = {
	getIssuesLists() {
		return axiosInstance.get()
	},

	getDetailIssue(IssueId) {
		return axiosInstance.get(`/${IssueId}`)
	},
}

export default IssuesAPI
