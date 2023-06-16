/**
 *
 * @param {type Date} date
 */
const timeHelper = date => {
	let result = ''
	const thisTime = new Date()
	const createTime = new Date(date)
	if (thisTime.getFullYear() !== createTime.getFullYear())
		return (result = `${
			thisTime.getFullYear() - createTime.getFullYear()
		} years ago`)
	if (thisTime.getMonth() !== createTime.getMonth())
		return (result = `${
			thisTime.getMonth() - createTime.getMonth()
		} months ago`)
	if (thisTime.getDate() !== createTime.getDate())
		return (result = `${thisTime.getDate() - createTime.getDate()} weeks ago`)
	if (thisTime.getHours() !== createTime.getHours())
		return (result = `${thisTime.getHours() - createTime.getHours()} days ago`)
	if (thisTime.getMinutes() !== createTime.getMinutes())
		return (result = `${
			thisTime.getMinutes() - createTime.getMinutes()
		} hours ago`)
	result = `just now`

	return result
}

export default timeHelper
