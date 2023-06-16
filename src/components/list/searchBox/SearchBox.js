import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import theme from 'styles/theme'

const SearchBox = () => {
	const [searchParam, setSearchParam] = useSearchParams()
	const navigate = useNavigate()
	const handleChange = e => {
		if (e.target.name === 'per_page') {
			searchParam.set('page', 1)
		}
		searchParam.set([e.target.name], e.target.value)
		navigate('/issues?' + searchParam.toString())
	}

	const per_page = searchParam.get('per_page') || 30
	const sort = searchParam.get('sort') || 'created'
	const state = searchParam.get('state') || 'open'
	const direction = searchParam.get('direction') || 'desc'

	return (
		<S.Wrapper>
			<S.Container>
				<Box sx={{ flex: 1 }}>
					<FormControl fullWidth>
						<InputLabel id="perPage">Per page</InputLabel>
						<Select
							labelId="perPage"
							name="per_page"
							id="demo-simple-select-1"
							label="perPage"
							value={per_page}
							onChange={handleChange}
						>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={20}>20</MenuItem>
							<MenuItem value={30}>30</MenuItem>
							<MenuItem value={50}>50</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box sx={{ flex: 1 }}>
					<FormControl fullWidth>
						<InputLabel id="Sort by">Sort by</InputLabel>
						<Select
							name="sort"
							labelId="Sort by"
							id="demo-simple-select-2"
							label="Sort by"
							value={sort}
							onChange={handleChange}
						>
							<MenuItem value={'created'}>Newest</MenuItem>
							<MenuItem value={'updated'}>Last Updated</MenuItem>
							<MenuItem value={'comments'}>Most Commented</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box sx={{ flex: 1 }}>
					<FormControl fullWidth>
						<InputLabel id="state">state</InputLabel>
						<Select
							name="state"
							labelId="state"
							id="demo-simple-select-3"
							label="state"
							value={state}
							onChange={handleChange}
						>
							<MenuItem value={'open'}>open</MenuItem>
							<MenuItem value={'closed'}>closed</MenuItem>
							<MenuItem value={'all'}>all</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box sx={{ flex: 1 }}>
					<FormControl fullWidth>
						<InputLabel id="state">direction</InputLabel>
						<Select
							name="direction"
							labelId="direction"
							id="demo-simple-select-4"
							label="direction"
							value={direction}
							onChange={handleChange}
						>
							<MenuItem value={'desc'}>desc</MenuItem>
							<MenuItem value={'asc'}>asc</MenuItem>
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
