import IssuesAPI from 'apis/issues.api'
import React, { useEffect, useState } from 'react'
import OneComment from './one-comment'
import styled from 'styled-components'
import { useParams } from 'react-router'

export default function Comments() {
	const [detailComments, setDetailComments] = useState(null)
	const searchParam = useParams()
	const loadDetail = async detailId => {
		try {
			const res = await IssuesAPI.getDetailIssueComments(detailId)
			return res
		} catch (err) {}
	}

	useEffect(() => {
		loadDetail(searchParam.issueId).then(res => {
			console.log(res)
			return setDetailComments(res.data)
		})
	}, [])

	if (!detailComments) return <div>Don't have Comments</div>
	return (
		<>
			<strong>Comments</strong>{' '}
			<CommentLength>{detailComments.length}ea</CommentLength>
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
const CommentLength = styled.span`
	font-size: 16px;
`

const S = {
	CommentList,
	CommentLength,
}
