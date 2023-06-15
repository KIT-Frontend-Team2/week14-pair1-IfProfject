import { useEffect, useState } from 'react'
import IssuesAPI from 'apis/issues.api'
import Paging from './components/pagination/paging'
import IssueList from './components/list/issue-list'
import styled from 'styled-components'
import theme from 'styles/theme'
import SearchBox from './components/searchBox/SearchBox'
import { useSearchParams } from 'react-router-dom'

const ListPage = () => {
	const [searchParam, setSearchParam] = useSearchParams()
	const [issues, setIssues] = useState([])

	const getIssueList = async () => {
		const getIssue = await IssuesAPI.getIssuesLists(searchParam.toString())
		setIssues(getIssue.data)
	}

	useEffect(() => {
		getIssueList()
	}, [searchParam.toString()])

	return (
		<S.Wrapper>
			<S.Container>
				<SearchBox />
				<IssueList issues={issues} />
				<Paging />
			</S.Container>
		</S.Wrapper>
	)
}

export default ListPage

const Wrapper = styled.div`
	background-color: ${theme.PALETTE.background.paleGray};
`

const Container = styled.div`
	max-width: 1080px;
	padding: 0 20px;
	margin: 0 auto;
`

const S = {
	Wrapper,
	Container,
}
