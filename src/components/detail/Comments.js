import React, { useEffect } from 'react'
import OneComment from './one-comment'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getComment } from 'reducer/comment'

export default function Comments({ detailCommentsLength }) {
	const searchParam = useParams()
	const dispatch = useDispatch()
	const detailComments = useSelector(state => state.comment.comments)
	const { loading } = useSelector(state => state.comment.getCommentState)

	const loadDetail = () => {
		dispatch(getComment(searchParam.issueId))
	}

	useEffect(() => {
		loadDetail()
	}, [])

	if (!detailComments) return <div>Don't have Comments</div>
	return (
		<>
			<strong>Comments</strong>{' '}
			<CommentLength>({detailCommentsLength}ea)</CommentLength>
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
