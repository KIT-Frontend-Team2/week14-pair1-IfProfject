import styled from 'styled-components'
import Container from '@mui/material/Container'
import TopButton from 'components/buttons/Top'
import BackButton from 'components/buttons/Back'
import { Skeleton } from '@mui/material'
import { useDevice } from 'hooks/useDevice'

const SkeletonDetailPage = () => {
	const { isMobile } = useDevice()

	return (
		<S.Wrapper>
			<Container style={{ paddingTop: '40px' }} maxWidth="xl">
				<S.Section>
					<S.TitleSection>
						<Skeleton
							variant="text"
							sx={{
								fontSize: !isMobile ? '3rem' : '1rem',
								width: !isMobile ? '100%' : '200px',
							}}
						/>
						<S.Number>
							<Skeleton
								variant="text"
								sx={{ fontSize: '2rem', width: !isMobile ? '150px' : '75px' }}
							/>
							<Skeleton
								variant="text"
								sx={{ fontSize: '2rem', width: !isMobile ? '150px' : '75px' }}
							/>
						</S.Number>
					</S.TitleSection>
					<S.InfoSection>
						<tbody>
							<S.InfoDataLow>
								<td>
									<Skeleton
										variant="text"
										sx={{
											fontSize: '2rem',
											width: !isMobile ? '150px' : '80px',
										}}
									/>
								</td>
								<td>
									<UserCard>
										{!isMobile && (
											<Skeleton
												variant="circular"
												width={'2rem'}
												height={'2rem'}
											/>
										)}
										<Skeleton
											variant="text"
											sx={{
												fontSize: '2rem',
												width: !isMobile ? '150px' : '80px',
											}}
										/>
									</UserCard>
								</td>
							</S.InfoDataLow>
							<S.InfoDataLow>
								<td>
									<Skeleton
										variant="text"
										sx={{
											fontSize: '2rem',
											width: !isMobile ? '150px' : '80px',
										}}
									/>
								</td>
								<td>
									<Skeleton
										variant="text"
										sx={{
											fontSize: '2rem',
											width: !isMobile ? '150px' : '80px',
										}}
									/>
								</td>
							</S.InfoDataLow>
							{!isMobile && (
								<S.InfoDataLow>
									<td>
										<Skeleton
											variant="text"
											sx={{ fontSize: '2rem', width: '150px' }}
										/>
									</td>
									<S.LabelList>
										<div>
											<Skeleton variant="rounded" width={120} height={25} />
											<Skeleton variant="rounded" width={120} height={25} />
										</div>
									</S.LabelList>
								</S.InfoDataLow>
							)}
							<S.InfoDataLow>
								<td>
									<Skeleton
										variant="text"
										sx={{
											fontSize: '2rem',
											width: !isMobile ? '150px' : '75px',
										}}
									/>
								</td>
								<td>
									<Skeleton
										variant="text"
										sx={{
											fontSize: '2rem',
											width: !isMobile ? '150px' : '75px',
										}}
									/>
								</td>
							</S.InfoDataLow>
						</tbody>
					</S.InfoSection>
					<S.BodySection>
						<Skeleton variant="rectangular" height={1000} />
					</S.BodySection>
				</S.Section>
			</Container>
			<BackButton />
			<TopButton />
		</S.Wrapper>
	)
}

export default SkeletonDetailPage

export const Wrapper = styled.div`
	width: 100%;
`

export const Section = styled.section`
	border: 2px solid ${({ theme }) => theme.PALETTE.Border.InnerBorder};
	padding: 30px;
	height: 100%;
	margin-bottom: 20px;
`
const TitleSection = styled.h2``

const Number = styled.span`
	color: ${({ theme }) => theme.PALETTE.gray[100]};
	display: flex;
	gap: 1rem;
`

const InfoSection = styled.table`
	padding: 20px 0px 20px 0;
	width: 100%;
	border-top: 1.5px solid ${({ theme }) => theme.PALETTE.Border.InnerBorder};
	border-bottom: 1.5px solid ${({ theme }) => theme.PALETTE.Border.InnerBorder};
	tr td {
		color: #a1aeb7;
	}
	tr > td:first-child {
		padding-right: 20px;
		font-weight: bold;
		width: ${({ isMobile }) => (isMobile ? '80px' : '150px')};
	}
`
const LabelList = styled.td`
	line-height: 45px;
	div {
		display: flex;
		gap: 1rem;
	}
`
const InfoDataLow = styled.tr`
	td {
		border-spacing: 0px;
	}
`
const BodySection = styled.div`
	padding: 25px;
`
export const UserCard = styled.div`
	display: flex;
	height: 30px;
	line-height: 30px;
	gap: 10px;
`
const S = {
	LabelList,
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
