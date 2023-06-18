import Wrapper from 'components/Layout/Wrapper'
import mainBg from 'assets/images/main-bg.jpeg'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'styles/styles.css'
import img1 from 'assets/images/slide_img_1.png'
import img2 from 'assets/images/slide_img_2.png'
import img3 from 'assets/images/slide_img_3.png'
import img4 from 'assets/images/slide_img_4.png'
import img5 from 'assets/images/slide_img_5.png'
import { Button, Stack } from '@mui/material'
import { flexCenter } from 'styles/common'
import { useNavigate } from 'react-router-dom'
import theme from 'styles/theme'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { useDevice } from 'hooks/useDevice'

const FirstSection = () => {
	const [opacity, setOpacity] = useState(1)
	const navigate = useNavigate()

	const handelScroll = () => {
		const scrollTop = window.scrollY

		const maxScroll = window.innerHeight - 200
		const newOpacity = 1 - scrollTop / maxScroll

		setOpacity(newOpacity > 0 ? newOpacity : 0)
	}

	useEffect(() => {
		window.addEventListener('scroll', handelScroll)
	}, [])

	const { isMobile, isTablet } = useDevice()

	if (isMobile) {
		return (
			<PhoneWrapper>
				<h5>Angular Issues Explorer</h5>
				<p>Deliver web apps with confidence</p>
				<Stack spacing={2} direction="row">
					<Button
						color="error"
						onClick={() => {
							window.scrollTo({ top: 0 })
							navigate('/issues')
						}}
						variant="outlined"
					>
						Site
					</Button>
					<Button
						color="secondary"
						onClick={() => {
							window.open('https://github.com/angular')
						}}
						variant="outlined"
					>
						Git
					</Button>
					<Button
						color="info"
						onClick={() => {
							window.open('https://angular.kr/')
						}}
						variant="outlined"
					>
						Home
					</Button>
				</Stack>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={false}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<img src={img1} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img2} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img3} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img4} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img5} />
					</SwiperSlide>
				</Swiper>
			</PhoneWrapper>
		)
	}

	if (isTablet) {
		return (
			<TabletWrapper>
				<h5>Angular Issues Explorer</h5>
				<p>Deliver web apps with confidence</p>
				<Stack spacing={2} direction="row">
					<Button
						color="error"
						onClick={() => {
							window.scrollTo({ top: 0 })
							navigate('/issues')
						}}
						variant="outlined"
					>
						Site
					</Button>
					<Button
						color="secondary"
						onClick={() => {
							window.open('https://github.com/angular')
						}}
						variant="outlined"
					>
						Git
					</Button>
					<Button
						color="info"
						onClick={() => {
							window.open('https://angular.kr/')
						}}
						variant="outlined"
					>
						Home
					</Button>
				</Stack>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={false}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<img src={img1} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img2} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img3} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img4} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img5} />
					</SwiperSlide>
				</Swiper>
			</TabletWrapper>
		)
	}

	return (
		<S.BackgroundDiv opacity={opacity}>
			<div>
				<picture>
					<img src={mainBg} />
				</picture>
			</div>
			<FlexBox>
				<Wrapper>
					<LeftSection>
						<h5>Angular Issues Explorer</h5>
						<p>Deliver web apps with confidence</p>
						<Stack spacing={2} direction="row">
							<Button
								color="error"
								onClick={() => {
									window.scrollTo({ top: 0 })
									navigate('/issues')
								}}
								variant="outlined"
							>
								Site
							</Button>
							<Button
								color="secondary"
								onClick={() => {
									window.open('https://github.com/angular')
								}}
								variant="outlined"
							>
								Git
							</Button>
							<Button
								color="info"
								onClick={() => {
									window.open('https://angular.kr/')
								}}
								variant="outlined"
							>
								Home
							</Button>
						</Stack>
					</LeftSection>
					<RightSection>
						<Swiper
							spaceBetween={30}
							centeredSlides={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
							navigation={false}
							modules={[Autoplay, Pagination, Navigation]}
							className="mySwiper"
						>
							<SwiperSlide>
								<img src={img1} />
							</SwiperSlide>
							<SwiperSlide>
								<img src={img2} />
							</SwiperSlide>
							<SwiperSlide>
								<img src={img3} />
							</SwiperSlide>
							<SwiperSlide>
								<img src={img4} />
							</SwiperSlide>
							<SwiperSlide>
								<img src={img5} />
							</SwiperSlide>
						</Swiper>
					</RightSection>
				</Wrapper>
			</FlexBox>
			<InfoTitle>
				More Info <ArrowDownwardIcon fontSize="large" />
			</InfoTitle>
		</S.BackgroundDiv>
	)
}

export default FirstSection

const BackgroundDiv = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	opacity: ${({ opacity }) => opacity};

	> div {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	img {
		width: 100%;
	}
`

const FlexBox = styled.div`
	${flexCenter};
`

const LeftSection = styled.div`
	width: 500px;
	height: 300px;
	text-align: left;
	h5 {
		margin: 0;
		font-size: 58px;
	}
	p {
		font-size: 24px;
		margin-bottom: 20px;
	}
`
const RightSection = styled.div`
	margin-top: -50px;
	width: 500px;
	height: 300px;
`

const InfoTitle = styled.h5`
	position: absolute;
	bottom: 24px;
	width: 100%;
	${flexCenter}
	gap:10px;
	text-align: center;
	margin-top: -40px;
	color: #fff;
	font-size: 32px;
	font-weight: ${theme.FONT_WEIGHT.semiBold};
	animation: motion 1s linear 0s infinite alternate;
	@keyframes motion {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-50%);
		}
	}
`

const PhoneWrapper = styled.div`
	display: flex;
	height: 100vh;
	align-items: center;
	padding: 3rem;
	color: white;
	flex-direction: column;
	h5 {
		font-size: 36px;
		margin-bottom: 0px;
	}
	p {
		font-size: 24px;
	}
	.swiper-wrapper {
		height: auto;
	}

	div {
		margin-bottom: 30px;
	}
`

const TabletWrapper = styled.div`
	display: flex;
	height: 100vh;
	align-items: center;
	padding: 3rem;
	color: white;
	flex-direction: column;
	h5 {
		font-size: 36px;
		margin-bottom: 0px;
	}
	p {
		font-size: 24px;
	}
	.swiper-wrapper {
		height: auto;
	}

	div {
		margin-bottom: 30px;
	}
`

const S = {
	BackgroundDiv,
}
