import styled from 'styled-components'
import theme from 'styles/theme'
import SearchBox from 'components/list/searchBox/SearchBox'
import IssueList from 'components/list/list/issue-list'
import Pagination from 'components/list/pagination/pagination'
import { motion, useScroll } from 'framer-motion'

const ListPage = () => {
	const { scrollYProgress } = useScroll()
	return (
		<>
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
			<S.Wrapper>
				<S.Container>
					<S.Title>Issue Finder 🔍</S.Title>
					<SearchBox />
					<IssueList />
					<Pagination />
				</S.Container>
			</S.Wrapper>
		</>
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

const Title = styled.div`
	padding: 60px 0;
	color: #333;
	font-size: 36px;
	font-weight: 700;
	text-align: center;
`

const S = {
	Wrapper,
	Container,
	Title,
}
