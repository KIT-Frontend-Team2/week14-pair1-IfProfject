import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

const Pagination = () => {
	const [searchParam, setSearchParam] = useSearchParams()
	const navigate = useNavigate()
	const handleChange = (e, page) => {
		if (page <= 0 || page > totalPage) return
		if (page === currentPage) return
		searchParam.set('page', page)
		window.scrollTo({ top: 0, behavior: 'smooth' })
		navigate('/issues?' + searchParam.toString())
	}

	const LIST_COUNT = 200
	const perPage = parseInt(searchParam.get('per_page')) || 30
	const currentPage = parseInt(searchParam.get('page')) || 1
	const totalPage = Math.ceil(LIST_COUNT / perPage)
	const pageGroupStart = Math.floor((currentPage - 1) / perPage) * perPage + 1
	const pageGroupEnd = pageGroupStart + perPage

	const getCurrentPageGroup = () => {
		let pageArr = []
		for (
			let pageIndex = pageGroupStart;
			pageIndex < pageGroupEnd;
			pageIndex++
		) {
			if (pageIndex > totalPage) break
			pageArr.push(pageIndex)
		}
		return pageArr
	}
	const currentPageGroup = getCurrentPageGroup()

	return (
		<S.Wrapper>
			<S.PageButton onClick={e => handleChange(e, 1)}>
				<KeyboardDoubleArrowLeftIcon />
			</S.PageButton>
			<S.PageButton onClick={e => handleChange(e, currentPage - 1)}>
				<KeyboardArrowLeftIcon />
			</S.PageButton>
			{currentPageGroup.map(page => (
				<S.PageButton
					page={page}
					currentPage={currentPage}
					onClick={e => handleChange(e, page)}
				>
					{page}
				</S.PageButton>
			))}
			<S.PageButton onClick={e => handleChange(e, currentPage + 1)}>
				<KeyboardArrowRightIcon />
			</S.PageButton>
			<S.PageButton onClick={e => handleChange(e, totalPage)}>
				<KeyboardDoubleArrowRightIcon />
			</S.PageButton>
		</S.Wrapper>
	)
}

export default Pagination

const Wrapper = styled.div`
	width: 100%;
	padding: 30px 0 70px;
	${flexCenter}
`
const PageButton = styled.div`
	${flexCenter}
	background-color: ${({ page, currentPage }) =>
		page && page === currentPage ? `#ddd` : `transparent`};
	width: 32px;
	height: 32px;
	color: ${({ page, currentPage }) =>
		page && page === currentPage ? `#000` : `#333`};
	border-radius: 50%;
`

const S = {
	Wrapper,
	PageButton,
}
