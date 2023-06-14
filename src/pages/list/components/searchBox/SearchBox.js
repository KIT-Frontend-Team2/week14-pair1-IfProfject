import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import styled from 'styled-components'
import theme from 'styles/theme'

const SearchBox = () => {
	const handleChange = () => {}

	return (
		<S.Wrapper>
			<S.Container>
				<Box sx={{ minWidth: 200 }} size="small">
					<FormControl fullWidth>
						<InputLabel id="perPage">Per page</InputLabel>
						<Select
							labelId="perPage"
							id="demo-simple-select-1"
							value=""
							label="Per page"
							onChange={handleChange}
						>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={20}>20</MenuItem>
							<MenuItem value={50}>50</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box sx={{ minWidth: 200 }} size="small">
					<FormControl fullWidth>
						<InputLabel id="sortBy">Sort by</InputLabel>
						<Select
							labelId="sortBy"
							id="demo-simple-select-2"
							value=""
							label="Per page"
							onChange={handleChange}
						>
							<MenuItem value={'created'}>Newest</MenuItem>
							<MenuItem value={'updated'}>Last Updated</MenuItem>
							<MenuItem value={'comments'}>Most Commented</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</S.Container>
		</S.Wrapper>
	)
}

export default SearchBox

const Wrapper = styled.div`
	margin-bottom: 10px;
	padding: 8px;
	padding-top: 30px;
	width: 100%;
`
const Container = styled.div`
	display: flex;
	gap: 10px;
	background-color: ${theme.PALETTE.background.white};
	border: 1px solid #ddd;
	padding: 30px;
`

const S = {
	Wrapper,
	Container,
}
