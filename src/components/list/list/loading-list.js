import { Avatar, Box, Card, CardContent, Skeleton } from '@mui/material'
import { useDevice } from 'hooks/useDevice'
import styled from 'styled-components'

const LoadingList = () => {
	const { isDesktop } = useDevice()
	const dummy = Array(10).fill()

	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				alignItems: 'stretch',
			}}
		>
			{dummy.map(() => (
				<Box
					sx={{
						width: isDesktop ? '50%' : '100%',
						padding: 1,
					}}
					key={dummy.id}
				>
					<Card variant="outlined" sx={{ height: '100%' }}>
						<CardContent sx={{ padding: 4 }}>
							<S.InfoTop>
								<div>
									<Skeleton variant="text" sx={{ fontSize: '2rem' }} />
									<Skeleton variant="text" sx={{ fontSize: '2rem' }} />
								</div>
								<div></div>
							</S.InfoTop>
							<S.InfoMiddle>
								<Skeleton
									variant="rounded"
									sx={{ borderRadius: '16px', margin: '8px 5px 0px 0' }}
									width={120}
									height={32}
								/>
								<Skeleton
									variant="rounded"
									sx={{ borderRadius: '16px', margin: '8px 5px 0px 0' }}
									width={120}
									height={32}
								/>
							</S.InfoMiddle>
							<S.InfoBottom>
								<S.InfoItem>
									<Skeleton variant="circular">
										<Avatar />
									</Skeleton>
								</S.InfoItem>
								<S.InfoItem>
									<Skeleton
										variant="text"
										width={200}
										sx={{ fontSize: '1.5rem' }}
									/>
								</S.InfoItem>
							</S.InfoBottom>
						</CardContent>
					</Card>
				</Box>
			))}
		</Box>
	)
}

export default LoadingList

const InfoTop = styled.div`
	display: grid;
	grid-template-columns: 4fr 1fr;
`

const InfoMiddle = styled.div`
	display: flex;
`

const InfoBottom = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	padding-top: 12px;
`

const InfoItem = styled.div`
	display: flex;
`

const S = {
	InfoTop,
	InfoBottom,
	InfoMiddle,
	InfoItem,
}
