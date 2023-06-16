import { Avatar, Card, CardContent, Chip, Typography } from '@mui/material'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useNavigate } from 'react-router-dom'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'
import theme from 'styles/theme'
import fontIsDark from 'utils/color-helper'
import timeFormatter from 'utils/time-helper'

const OneIssue = ({ issue }) => {
	const { number, title, labels, user, created_at } = issue

	const navigation = useNavigate()

	const onClickTitle = number => {
		console.log(number)
		navigation(`/issues/${number}`)
	}

	return (
		<Card variant="outlined" sx={{ height: '100%' }}>
			<CardContent sx={{ padding: 4 }}>
				<S.InfoTop>
					<div>
						<Typography
							sx={{
								fontSize: theme.FONT_SIZE.large,
								fontWeight: theme.FONT_WEIGHT.semiBold,
								wordBreak: 'break-word',
								cursor: 'pointer',
								':hover': {
									textDecoration: 'underline',
								},
							}}
						>
							<ReactMarkdown
								children={title}
								rehypePlugins={[rehypeRaw]}
								remarkPlugins={[remarkGfm]}
								onClick={() => onClickTitle(number)}
							/>
						</Typography>
					</div>
					<div></div>
				</S.InfoTop>
				<S.InfoMiddle>
					<div>
						{labels.map(label => {
							return (
								<Chip
									key={label.id}
									label={label.name}
									style={{
										color: `${fontIsDark(label.color) ? 'white' : 'black'}`,
										backgroundColor: `#${label.color}`,
										fontWeight: 'bold',
										margin: '8px 5px 0px 0',
									}}
								/>
							)
						})}
					</div>
				</S.InfoMiddle>
				<S.InfoBottom>
					<S.InfoItem>
						<Avatar alt={user.login} src={user.avatar_url} sx={{ w: 30 }} />
					</S.InfoItem>
					<S.InfoItem>{user.login}</S.InfoItem>
					<S.InfoItem>{timeFormatter(created_at)}</S.InfoItem>
				</S.InfoBottom>
			</CardContent>
		</Card>
	)
}

export default OneIssue

const InfoTop = styled.div`
	display: grid;
	grid-template-columns: 4fr 1fr;
`

const InfoMiddle = styled.div``

const InfoBottom = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	padding-top: 12px;
`

const InfoItem = styled.div`
	display: flex;
	font-size: ${theme.FONT_SIZE.semiMedium};
	color: ${theme.PALETTE.fontColor.gray};
`

const S = {
	InfoTop,
	InfoBottom,
	InfoMiddle,
	InfoItem,
}
