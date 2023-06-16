import styled from 'styled-components'

const Wrapper = ({ children, backGround }) => {
	return (
		<S.Box backGround={backGround}>
			<S.Container>{children}</S.Container>
		</S.Box>
	)
}

export default Wrapper

const Box = styled.div`
	scroll-snap-align: center;
	height: 100vh;
	font-size: 70px;
	text-align: center;
	background-color: ${({ backGround }) => backGround};
`

const Container = styled.div`
	padding: 5em;
`
const S = { Box, Container }
