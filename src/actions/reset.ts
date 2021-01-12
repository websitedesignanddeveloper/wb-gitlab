
setVars([
	{
		name: 'GITLAB_PERSONAL_TOKEN',
		value: '',
	},
], { local: true })

notify('Access token removed successfully.', 'success', 3000)
reIndex()



