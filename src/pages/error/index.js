import { useNavigate } from 'react-router'

const ErrorPage = () => {
	const navigate = useNavigate()
	alert('잘못된 url 요청입니다.')
	navigate('/')
	return <></>
}

export default ErrorPage
