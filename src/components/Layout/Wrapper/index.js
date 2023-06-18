import styled from 'styled-components'
import { flexCenter } from 'styles/common'

const Wrapper = ({ children, paddingTop, backGround }) => {
	return (
		<S.BoxWrapper paddingTop={paddingTop}>
			<S.Box backGround={backGround}>
				<S.Container>{children}</S.Container>
			</S.Box>
		</S.BoxWrapper>
	)
}

export default Wrapper

const BoxWrapper = styled.div`
	padding-top: ${({ paddingTop }) => paddingTop};
`

const Box = styled.div`
	width: 100%;
	color: #fff;
	background-color: ${({ backGround }) => backGround};
`

const Container = styled.div`
	${flexCenter}
	gap: 40px;
	margin: 0 auto;
	width: 1080px;
	padding: 40px 40px;
`
const S = { BoxWrapper, Box, Container }
