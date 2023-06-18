import { useMediaQuery } from '@mui/material'

export const useDevice = () => {
	const isMobile = useMediaQuery('(max-width: 425px)')
	const isTablet = useMediaQuery('(min-width: 426px) and (max-width: 1679px)')
	const isDesktop = useMediaQuery('(min-width: 1400px)')

	return {
		isMobile,
		isTablet,
		isDesktop,
	}
}
