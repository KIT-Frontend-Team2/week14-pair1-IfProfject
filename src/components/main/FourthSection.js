import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material'
import Wrapper from 'components/Layout/Wrapper'
import GitHubIcon from '@mui/icons-material/GitHub'
import styled from 'styled-components'
import naturej from 'assets/images/naturej.gif'
import jihyeong from 'assets/images/jihyeong.gif'
import theme from 'styles/theme'

const FourthSection = () => {
	return (
		<StyleDiv>
			<S.Title>Contributors</S.Title>
			<Wrapper>
				<div data-aos="zoom-in">
					<Card sx={{ width: 345 }}>
						<img src={jihyeong} />
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Jihyeong00
							</Typography>
							<Typography variant="body2" color="text.secondary">
								이지형
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								sx={{
									gap: '8px',
									color: '#666',
									':hover': { background: '#f0f0f0' },
								}}
								size="small"
								onClick={() => window.open('https://github.com/Jihyeong00')}
							>
								<GitHubIcon />
								Github
							</Button>
						</CardActions>
					</Card>
				</div>
				<div data-aos="zoom-in">
					<Card sx={{ width: 345 }}>
						<img src={naturej} />
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								naturej
							</Typography>
							<Typography variant="body2" color="text.secondary">
								정자연
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								sx={{
									gap: '8px',
									color: '#666',
									':hover': { background: '#f0f0f0' },
								}}
								size="small"
								onClick={() => window.open('https://github.com/naturej')}
							>
								<GitHubIcon />
								Github
							</Button>
						</CardActions>
					</Card>
				</div>
			</Wrapper>
		</StyleDiv>
	)
}

export default FourthSection

const StyleDiv = styled.div`
	padding-top: 10vh;
`

const Title = styled.div`
	padding-bottom: 20px;
	font-size: 40px;
	font-weight: ${theme.FONT_WEIGHT.bold};
	color: #fff;
	text-align: center;
`

const S = {
	StyleDiv,
	Title,
}
