import { Pagination } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

const Paging = () => {
	const [searchParam, setSearchParam] = useSearchParams()
	const navigate = useNavigate()
	const handleChange = (e, page) => {
		searchParam.set('page', page)
		window.scrollTo({ top: 0, behavior: 'smooth' })
		navigate('/issues?' + searchParam.toString())
	}
	const defaultPerPage = parseInt(searchParam.get('per_page')) || 30
	const page = parseInt(searchParam.get('page')) || 1

	const LIST_COUNT = 200

	return (
		<S.Wrapper>
			<Pagination
				name="page"
				count={Math.floor(LIST_COUNT / defaultPerPage)}
				siblingCount={5}
				defaultPage={1}
				page={page}
				onChange={handleChange}
				showFirstButton={true}
				showLastButton={true}
			/>
		</S.Wrapper>
	)
}

export default Paging

const Wrapper = styled.div`
	width: 100%;
	padding: 30px 0 70px;
	${flexCenter}
`

const S = {
	Wrapper,
}
