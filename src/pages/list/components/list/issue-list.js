import { Box } from '@mui/material'
import OneIssue from './one-issue'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getIssue } from 'reducer/issue'
import { useSearchParams } from 'react-router-dom'

const IssueList = () => {
	const [searchParam, setSearchParam] = useSearchParams()

	const dispatch = useDispatch()
	const issues = useSelector(state => state.issue.issues)
	const { loading } = useSelector(state => state.issue.getIssueState)

	const getIssueList = () => {
		dispatch(getIssue(searchParam.toString()))
	}

	useEffect(() => {
		getIssueList()
	}, [searchParam])

	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				alignItems: 'stretch',
			}}
		>
			{issues.map(issue => (
				<Box
					sx={{
						width: '50%',
						padding: 1,
					}}
					key={issue.id}
				>
					<OneIssue issue={issue} />
				</Box>
			))}
		</Box>
	)
}

export default IssueList
