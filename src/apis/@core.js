import axios from 'axios'
import API_CONST from 'consts/api'

const axiosInstance = axios.create({
	baseURL: API_CONST.BACKEND_URL + API_CONST.OWNER_REPO_TYPE,
	headers: {
		Authorization: 'Bearer' + API_CONST.TOKEN,
	},
})

export default axiosInstance
