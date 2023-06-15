import { useNavigate } from 'react-router-dom'

const MainPage = () => {
	const navigate = useNavigate()
	return (
		<>
			{' '}
			메인페이지 입니다 :){' '}
			<button onClick={() => navigate('/issues')}>이동</button>
		</>
	)
}

export default MainPage
