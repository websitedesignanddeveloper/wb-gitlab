let token = null

if (args[0]) {
	token = args[0]
} else {
	open('https://gitlab.com/profile/personal_access_tokens')
	const tokenName = `workerb-${new Date().getTime()}`

	type(tokenName, 'Name', { method: 'by_label' })

	click('api', {})
	click('read_user', {})
	click('read_api', {})
	click('read_repository', {})
	click('write_repository', {})
	click('read_registry', {})
	click('write_registry', {})

	//@ts-ignore
	submit('Name', {
		//@ts-ignore
		method: 'by_label',
		//@ts-ignore
		expectReload: true,
	})

	token = read('#created-personal-access-token', { method: 'by_query_selector' })
}

if (!token) {
	notify('Failed to save the auth token.', 'error', 3000)
} else {
	setVars([
		{
			name: 'GITLAB_PERSONAL_TOKEN',
			value: token,
		},
	], { local: true })

	notify('Access token added successfully.', 'success', 3000)
	reIndex()
}
