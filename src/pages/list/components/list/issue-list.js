import { Box } from '@mui/material'
import OneIssue from './one-issue'

const IssueList = ({ issues }) => {
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
