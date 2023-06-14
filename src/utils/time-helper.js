import moment from 'moment/moment'

const timeFormatter = time => {
	return moment(time).format('YYYY-MM-DD HH:mm')
}

export default timeFormatter
