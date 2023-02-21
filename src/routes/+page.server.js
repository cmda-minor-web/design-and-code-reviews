import { client } from '$lib/utils/client'
import {headersGitHub, getReceivedIssues, getSubmittedIssues}  from '$lib/queries/issues'

export const load = async () => {
    const { repository } = await client({ query: getReceivedIssues(), fetch, endpoint: 'https://api.github.com/graphql', headers: headersGitHub })
    const issues = await getIssues(repository)

    return issues
}

function getIssues(repo){
    return repo.forks.nodes.map(async node => {
        const variables = {queryString: `is:issue author:${node.owner.login}`}

        const {search:{edges}} = await client({ query: getSubmittedIssues(), variables, fetch, endpoint: 'https://api.github.com/graphql', headers: headersGitHub })
        const submittedIssues = await edges.filter(edge => {
            return edge.node.author.login == node.owner.login 
                    && edge.node.repository.parent 
                    && edge.node.repository.parent.nameWithOwner.includes('web-app-from-scratch-2223')
        }).sort((a, b) => (a.node.number > b.node.number) ? 1 : -1)

        return {
            name:node.name,
            owner:node.owner.login,
            ownerUrl:node.owner.url,
            avatar:node.owner.avatarUrl,
            receivedIssues:node.issues.nodes,
            submittedIssues
        }
    })
}

  