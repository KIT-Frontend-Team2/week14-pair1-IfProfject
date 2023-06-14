import IssuesAPI from 'apis/issues.api'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Container from '@mui/material/Container'
import { Avatar, Chip } from '@mui/material'
import fontIsDark from 'utils/color-helper'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Comments from 'components/detail/Comments'
import timeFormatter from 'utils/time-helper'
import CheckCircle from '@mui/icons-material/CheckCircle'
import Adjust from '@mui/icons-material/Adjust'
import { useNavigate, useParams } from 'react-router-dom'
import TopButton from 'components/buttons/Top'
import BackButton from 'components/buttons/Back'
const DetailPage = () => {
	const searchParam = useParams()
	const [detailInfo, setDetailInfo] = useState(null)
	const navigate = useNavigate()
	const loadDetail = async detailId => {
		try {
			const res = await IssuesAPI.getDetailIssue(detailId)
			return res
		} catch (err) {
			alert('잘못된 경로입니다.')
			navigate('/')
		}
	}

	useEffect(() => {
		loadDetail(searchParam.issueId).then(res => setDetailInfo(res))
	}, [])

	if (!detailInfo) return <div>데이터가 없습니다</div>

	console.log(detailInfo.data)
	const { title, labels, body, created_at, state, number, updated_at, user } =
		detailInfo.data
	return (
		<S.Wrapper>
			<Container style={{ paddingTop: '40px' }} maxWidth="xl">
				<S.Section>
					<S.TitleSection>
						{title} <S.Number>#{number}</S.Number>{' '}
						{state === 'open' ? (
							<Chip icon={<Adjust />} label={state} color="secondary" />
						) : (
							<Chip icon={<CheckCircle />} label={state} color="success" />
						)}
					</S.TitleSection>
					<S.InfoSection>
						<tbody>
							<S.InfoDataLow>
								<td>user</td>
								<td>
									<UserCard>
										<Avatar alt={user.login} src={user.avatar_url} />{' '}
										{user.login}
									</UserCard>
								</td>
							</S.InfoDataLow>
							<S.InfoDataLow>
								<td>
									{created_at === updated_at ? 'created_at' : 'updated_at'}
								</td>
								<td>{timeFormatter(updated_at)}</td>
							</S.InfoDataLow>
							<S.InfoDataLow>
								<td>Labels</td>
								<td>
									{labels.map(label => {
										return (
											<Chip
												key={label.id}
												label={label.name}
												style={{
													color: `${
														fontIsDark(label.color) ? 'white' : 'black'
													}`,
													backgroundColor: `#${label.color}`,
													fontWeight: 'bold',
													marginRight: '5px',
												}}
											/>
										)
									})}
								</td>
							</S.InfoDataLow>
							<S.InfoDataLow>
								<td>Unlimited</td>
								<td>Unlimited</td>
							</S.InfoDataLow>
						</tbody>
					</S.InfoSection>
					<S.BodySection>
						<ReactMarkdown children={body} />
					</S.BodySection>
				</S.Section>
				<Comments issuesId={number} />
			</Container>
			<BackButton />
			<TopButton />
		</S.Wrapper>
	)
}

export default DetailPage

const Wrapper = styled.div`
	width: 100%;
`

const Section = styled.section`
	border: 2px solid ${({ theme }) => theme.PALETTE.Border.InnerBorder};
	padding: 30px;
	height: 100%;
	margin-bottom: 20px;
`
const TitleSection = styled.h2``
const Number = styled.span`
	color: ${({ theme }) => theme.PALETTE.gray[100]};
`

const InfoSection = styled.table`
	padding: 20px 0px 20px 20px;
	width: 100%;
	border-top: 1.5px solid ${({ theme }) => theme.PALETTE.Border.InnerBorder};
	border-bottom: 1.5px solid ${({ theme }) => theme.PALETTE.Border.InnerBorder};
	border-spacing: 10px;
	tr td {
		color: #a1aeb7;
	}
	tr > td:first-child {
		padding-right: 20px;
		font-weight: bold;
		width: 150px;
	}
`
const InfoDataLow = styled.tr``
const BodySection = styled.div`
	padding: 50px 0px 100px 0px;
`
export const UserCard = styled.div`
	display: flex;
	height: 30px;
	line-height: 30px;
	gap: 10px;
`
const S = {
	Wrapper,
	Container,
	Section,
	TitleSection,
	Number,
	InfoSection,
	InfoDataLow,
	BodySection,
	UserCard,
}
