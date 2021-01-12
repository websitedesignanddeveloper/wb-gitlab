if (options.org) {
	//notify("group id: "+options.org.id,"success",3000)
	//open(`https://gitlab.com/api/v4/groups/${options.org.id}/projects`)
	open(`${options.org.html_url}`)
} else {
	notify('No repository found', 'error', 3000)
}
