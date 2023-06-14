import IssuesAPI from 'apis/issues.api'
import React, { useEffect, useState } from 'react'
import OneComment from './one-comment'
import styled from 'styled-components'

export default function Comments() {
	const [detailComments, setDetailComments] = useState(null)

	const loadDetail = async detailId => {
		try {
			const res = IssuesAPI.getDetailIssueComments(detailId)
			return res
		} catch (err) {
			throw err
		}
	}

	useEffect(() => {
		loadDetail(4).then(res => setDetailComments(res.data))
	}, [])

	if (!detailComments) return <div>Don't have Comments</div>
	return (
		<>
			<strong>Comments</strong>
			<S.CommentList>
				{detailComments.map(comment => (
					<OneComment key={comment.id} comment={comment} />
				))}
			</S.CommentList>
		</>
	)
}

const CommentList = styled.ul`
	padding: 0px;
	border-top: 3px solid ${({ theme }) => theme.PALETTE.Border.InnerBorder};
`

const S = {
	CommentList,
}
