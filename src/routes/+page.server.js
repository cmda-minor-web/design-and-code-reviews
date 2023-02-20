import { client } from '$lib/utils/client'
import {headersGitHub, getReceivedIssues, getSubmittedIssues}  from '$lib/queries/issues'

export const load = async () => {

    const { repository } = await client({ query: getReceivedIssues(), fetch, endpoint: 'https://api.github.com/graphql', headers: headersGitHub })
    const forkOwners = repository.forks.nodes.map(node => node.owner.login)

    const variables = {queryString: "is:issue org:cmda-minor-web fork:true"}
      
    
    //const submittedIssues = await client({ query: getSubmittedIssues(), variables, fetch, endpoint: 'https://api.github.com/graphql', headers: headersGitHub })

    return repository
}

  