import { token } from '../utils/constants'

const returnOptions = () => {
	if (!token) {
		return JSON.stringify({
			remove: ['reset', 'org'],
		})
	}
	return JSON.stringify({
		remove: ['setup'],
	})
}

export default returnOptions
