import Fab from '@mui/material/Fab'
import NavigationIcon from '@mui/icons-material/Navigation'
import styled from 'styled-components'
import { useState } from 'react'
import { useDevice } from 'hooks/useDevice'

const TopButton = () => {
	const [showButton, setShowButton] = useState(false)
	const { isMobile } = useDevice()
	const MoveTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > 400) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
	})

	return (
		showButton && (
			<TopBtn onClick={MoveTop}>
				<Fab variant="extended">
					<NavigationIcon sx={{ mr: 1 }} />
					Navigate
				</Fab>
			</TopBtn>
		)
	)
}
export default TopButton

const TopBtn = styled.div`
	position: fixed;
	bottom: 20px;
	right: ${({ isMobile }) => (isMobile ? '15%' : '20px')};
	z-index: 900;
`
