import { Button } from '@mui/material'
import Wrapper from 'components/Layout/Wrapper'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const FifthSection = () => {
	const navigate = useNavigate()

	return (
		<StyleDiv>
			<Wrapper paddingTop={'10vh'}>
				{/* 링크 이동 버튼 */}
				<div>
					<h2>Ready to watching issues?</h2>
					<span>Everyone can do it!</span>
				</div>
				<FlexDiv>
					<div>
						<Button
							color="info"
							onClick={() => navigate('/issues')}
							variant="outlined"
						>
							watching issues
						</Button>
					</div>
					<div>
						<Button
							color="secondary"
							onClick={() => {
								window.open('https://github.com/angular')
							}}
							variant="outlined"
						>
							Git
						</Button>
					</div>
				</FlexDiv>
			</Wrapper>
		</StyleDiv>
	)
}

export default FifthSection

const StyleDiv = styled.div`
	padding-bottom: 80px;
`

const FlexDiv = styled.div`
	display: flex;
	gap: 20px;
`
