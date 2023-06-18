import { Box } from '@mui/material'
import styled, { keyframes } from 'styled-components'

const RollingSection = () => {
	const bull = (
		<Box
			component="span"
			sx={{
				display: 'inline-block',
				mx: '2px',
				transform: 'scale(0.8)',
			}}
		>
			•
		</Box>
	)

	return (
		<StyleDiv>
			<S.RollingWrapper>
				<S.RollingTrack>
					<S.RollingText>
						<span
							onClick={() =>
								window.open('https://github.com/remix-run/react-router')
							}
						>
							react-router-dom
						</span>
						{bull}
						<span
							onClick={() =>
								window.open('https://github.com/reduxjs/redux-toolkit')
							}
						>
							redux-toolkit
						</span>
						{bull}
						<span
							onClick={() => window.open('https://github.com/mui/material-ui')}
						>
							mui
						</span>
						{bull}
						<span onClick={() => window.open('https://github.com/axios/axios')}>
							axios
						</span>
						{bull}
						<span onClick={() => window.open('https://github.com/mswjs/msw')}>
							msw
						</span>
						{bull}
						<span
							onClick={() =>
								window.open('https://github.com/remarkjs/react-markdown')
							}
						>
							react-markdown
						</span>
						{bull}
						<span
							onClick={() => window.open('https://github.com/moment/moment')}
						>
							moment
						</span>
						{bull}
						<span
							onClick={() => window.open('https://github.com/michalsnik/aos')}
						>
							AOS
						</span>
						{bull}
						<span
							onClick={() =>
								window.open(
									'https://github.com/styled-components/styled-components',
								)
							}
						>
							styled-component
						</span>
					</S.RollingText>
				</S.RollingTrack>
			</S.RollingWrapper>
		</StyleDiv>
	)
}

export default RollingSection

const StyleDiv = styled.div`
	padding-top: 10vh;
`

const RollingWrapper = styled.div`
	color: #fff;
	font-size: 64px;
	font-family: 'Raleway', Sans-serif;
	font-weight: 900;
	position: relative;
	width: 100%;
	max-width: 100%;
	height: 70px;
	overflow-x: hidden;
	overflow-y: hidden;
	text-transform: uppercase;
`
const marquee = keyframes`
	from {
		transform: translateX(0%);
	}
	to {
		transform: translateX(-100%);
	}
`

const RollingTrack = styled.div`
	position: absolute;
	white-space: nowrap;
	will-change: transform;
	animation: ${marquee} 25s linear infinite;
	:hover {
		animation-play-state: paused;
	}
`

const RollingText = styled.div`
	display: inline;
	padding: 0 10px;

	span {
		cursor: pointer;
		:hover {
			background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
			color: transparent;
			-webkit-background-clip: text;
			background-clip: text;
		}
	}
`
const S = {
	RollingWrapper,
	RollingTrack,
	RollingText,
}
