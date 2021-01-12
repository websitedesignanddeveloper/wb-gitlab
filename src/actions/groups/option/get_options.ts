/* eslint-disable consistent-return */
import { getAllOrgProjects } from '../../../utils/api'
import { decodeApiResponse } from '../../../utils/helper'

export default () => {
	if (options?.org) {
	//const { id } = options.org.id
	const response = getAllOrgProjects(options.org.id)
	const result = decodeApiResponse(response)

	if (result.status >= 400) {
		return {}
	}

	const projects = result.response.map((project: { name: string;id:number; web_url: string;path:string }) => ({
		name: project.name,
		id: project.id,
		web_url: project.web_url,
		path: project.path,
	}))

	return JSON.stringify({
		add: projects,
	})
	}
}

