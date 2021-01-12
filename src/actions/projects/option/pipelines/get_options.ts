import { decodeApiResponse, handleErrors } from '../../../../utils/helper'
import { getAllPipelines } from '../../../../utils/api'

function parseISOString(s: string) {
	var b = s.split(/\D+/)
	return new Date(
		Date.UTC(Number(b[0]), Number(b[1]) - 1, Number(b[2]), Number(b[3]), Number(b[4]), Number(b[5]), Number(b[6]))
	).toUTCString()
}

export default () => {
	if (options ?.projects) {
		const { id: projectId } = options.projects
		const response = getAllPipelines(projectId)
		const result = decodeApiResponse(response)

		if (result.status >= 400) {
			return {}
		}

		const pipelines = result.response.map(
			({
				web_url,
				id,
				status,
				created_at,
			}: {
					web_url: string
					id: number
					status: string
					created_at: string
				}) => ({
					id,
					name: `Pipeline: #${id}`,
					html_url: web_url,
					description: `Created on ${parseISOString(created_at)}. Status: ${status}`,
				})
		)

		// eslint-disable-next-line consistent-return
		return JSON.stringify({
			add: pipelines,
		})
	}

	return {}
}
