import { Box } from '@mui/material'
import OneIssue from './one-issue'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getIssue } from 'reducer/issue'
import { useSearchParams } from 'react-router-dom'
import LoadingList from './loading-list'
import { useDevice } from 'hooks/useDevice'

const IssueList = () => {
	const [searchParam, setSearchParam] = useSearchParams()
	const { isDesktop } = useDevice()

	const dispatch = useDispatch()
	const issues = useSelector(state => state.issue.issues)
	const { loading } = useSelector(state => state.issue.getIssueState)

	const getIssueList = async () => {
		await dispatch(getIssue(searchParam.toString()))
	}

	useEffect(() => {
		getIssueList()
	}, [searchParam])

	return (
		<>
			{loading ? (
				<LoadingList />
			) : (
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
								width: isDesktop ? '50%' : '100%',
								padding: 1,
							}}
							key={issue.id}
						>
							<OneIssue issue={issue} />
						</Box>
					))}
				</Box>
			)}
		</>
	)
}

export default IssueList
