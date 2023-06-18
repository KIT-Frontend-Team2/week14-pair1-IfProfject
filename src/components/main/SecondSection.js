import Wrapper from 'components/Layout/Wrapper'
import img from 'assets/images/slide_img_4.png'
import { Typography } from '@mui/material'

const SecondSection = () => {
	return (
		<>
			<Wrapper paddingTop={'120vh'}>
				{/* 목록 페이지 소개 */}
				<div>
					<h2>Issue List Page</h2>
					<Typography>
						Our platform offers beautifully designed user interfaces for an
						enhanced and engaging experience.
					</Typography>
				</div>
				<div data-aos="fade-left">
					<img src={img} />
				</div>
			</Wrapper>
		</>
	)
}

export default SecondSection
