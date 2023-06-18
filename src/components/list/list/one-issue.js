import { Avatar, Card, CardContent, Chip, Typography } from '@mui/material'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useNavigate } from 'react-router-dom'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'
import theme from 'styles/theme'
import fontIsDark from 'utils/color-helper'
import timeFormatter from 'utils/time-helper'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { Adjust, CheckCircle } from '@mui/icons-material'

const OneIssue = ({ issue }) => {
	const { number, state, title, comments, labels, user, created_at } = issue

	const navigation = useNavigate()

	const onClickTitle = number => {
		navigation(`/issues/${number}`)
	}

	return (
		<Card variant="outlined" sx={{ height: '100%' }}>
			<CardContent sx={{ padding: 4 }}>
				<S.InfoTop>
					<S.InfoTitle>
						<Typography
							variant="h3"
							sx={{
								fontSize: theme.FONT_SIZE.large,
								fontWeight: theme.FONT_WEIGHT.semiBold,
								wordBreak: 'break-word',
								cursor: 'pointer',
								':hover': {
									textDecoration: 'underline',
								},
							}}
							onClick={() => onClickTitle(number)}
						>
							{state === 'open' ? (
								<Adjust color="secondary" />
							) : (
								<CheckCircle color="success" />
							)}
							<ReactMarkdown
								children={title}
								rehypePlugins={[rehypeRaw]}
								remarkPlugins={[remarkGfm]}
							/>
						</Typography>
					</S.InfoTitle>
					<S.InfoComment>
						{comments ? (
							<>
								<ChatBubbleOutlineIcon color="action" />
								{comments}
							</>
						) : (
							''
						)}
					</S.InfoComment>
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
const InfoTitle = styled.div`
	h3 {
		svg {
			vertical-align: middle;
			margin-right: 4px;
		}
		p {
			margin-top: 0;
			display: inline;
			code {
				padding: 3px 6px;
				font-size: ${theme.FONT_SIZE.medium};
				font-weight: ${theme.FONT_WEIGHT.bold};
				background-color: #f0f0f0;
			}
		}
	}
`

const InfoComment = styled.div`
	display: flex;
	justify-content: end;
	align-items: start;
	gap: 8px;
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
	InfoTitle,
	InfoComment,
	InfoItem,
}
