import FifthSection from 'components/main/FifthSection'
import FirstSection from 'components/main/FirstSection'
import FourthSection from 'components/main/FourthSection'
import SecondSection from 'components/main/SecondSection'
import ThirdSection from 'components/main/ThiredSection'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const MainPage = () => {
	const navigate = useNavigate()
	return (
		<S.RendingPage>
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<button onClick={() => navigate('/issues')}>이동</button>
		</S.RendingPage>
	)
}

export default MainPage

const RendingPage = styled.div`
	height: 100vh;
	overflow: auto;
	scroll-snap-type: y mandatory;
	::-webkit-scrollbar {
		display: none;
	}
`

const S = {
	RendingPage,
}
