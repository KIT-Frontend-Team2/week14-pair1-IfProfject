import Wrapper from 'components/Layout/Wrapper'
import img from 'assets/images/slide_img_5.png'

const ThirdSection = () => {
	return (
		<>
			<Wrapper paddingTop={'20vh'}>
				{/* 상세 페이지 소개 */}
				<div data-aos="fade-right">
					<img src={img} />
				</div>
				<div>
					<h2>Issue Detail Page</h2>
					<span>
						Our platform offers beautifully designed user interfaces for an
						enhanced and engaging experience.
					</span>
				</div>
			</Wrapper>
		</>
	)
}

export default ThirdSection
