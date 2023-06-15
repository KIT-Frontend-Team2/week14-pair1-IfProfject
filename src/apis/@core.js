import axios from 'axios'
import API_CONST from 'consts/api'

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL + API_CONST.OWNER_REPO_TYPE,
	headers: {
		Authorization: 'Bearer' + process.env.REACT_APP_GIT_TOKEN,
	},
})

export default axiosInstance
