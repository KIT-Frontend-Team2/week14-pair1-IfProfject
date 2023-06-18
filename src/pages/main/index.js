import FifthSection from 'components/main/FifthSection'
import FirstSection from 'components/main/FirstSection'
import FourthSection from 'components/main/FourthSection'
import SecondSection from 'components/main/SecondSection'
import ThirdSection from 'components/main/ThiredSection'
import RollingSection from 'components/main/RollingSection'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useDevice } from 'hooks/useDevice'

const MainPage = () => {
	const { scrollYProgress } = useScroll()
	useEffect(() => {
		AOS.init()
	}, [])
	const { isDesktop } = useDevice()

	return (
		<>
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
			<S.RendingPage>
				<FirstSection />
				{isDesktop && (
					<>
						<SecondSection />
						<ThirdSection />
						<RollingSection />
						<FourthSection />
						<FifthSection />
					</>
				)}
			</S.RendingPage>
		</>
	)
}

export default MainPage

const RendingPage = styled.div`
	background-color: #000;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const S = {
	RendingPage,
}
