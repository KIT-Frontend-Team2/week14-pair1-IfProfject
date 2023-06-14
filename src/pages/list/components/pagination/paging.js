import { Pagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

const Paging = () => {
	const navigation = useNavigate()

	const handleChange = () => {
		console.log('페이지 이동')
	}

	return (
		<S.Wrapper>
			<Pagination
				count={10}
				defaultPage={1}
				siblingCount={5}
				onChange={handleChange}
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
