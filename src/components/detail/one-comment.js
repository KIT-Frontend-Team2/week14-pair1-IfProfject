import { Avatar } from '@mui/material'
import { UserCard } from 'pages/detail'
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import styled from 'styled-components'
import timeFormatter from 'utils/time-helper'

export default function OneComment({ comment }) {
	const { created_at, updated_at, user, body } = comment
	return (
		<li>
			<S.Wrapper>
				<S.InfoDataLow>
					<UserCard>
						<Avatar alt={user.login} src={user.avatar_url} />
						{user.login}
					</UserCard>
					<div>
						{created_at === updated_at ? 'created_at' : 'updated_at'}{' '}
						{timeFormatter(updated_at)}
					</div>
				</S.InfoDataLow>
				<div></div>
				<div></div>
				<ReactMarkdown children={body} />
			</S.Wrapper>
		</li>
	)
}

const Wrapper = styled.div`
	border-bottom: 1.5px solid ${({ theme }) => theme.PALETTE.Border.InnerBorder};
	margin: 10px 0 10px 0;
	padding: 10px 0 10px 0;
`

const InfoDataLow = styled.div`
	display: flex;
	justify-content: space-between;
`
const S = {
	Wrapper,
	InfoDataLow,
}
