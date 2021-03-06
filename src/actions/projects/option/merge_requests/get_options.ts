import { getAllMergeRequest } from '../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../utils/helper'

// eslint-disable-next-line func-names
export default function () {
	if (options?.projects) {
		const { id } = options.projects
		const response = getAllMergeRequest(id)
		const result = decodeApiResponse(response)

		if (result.status >= 400) {
			return {}
		}

		const merge_requests = result.response.map((mr: any) => ({
			name: mr.title,
			html_url: mr.web_url,
			id: mr.iid,
			state: mr.state,
		}))

		return JSON.stringify({
			add: merge_requests,
		})
	}
	return {}
}
