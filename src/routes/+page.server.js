import { client }     from '$lib/utils/client'
import {headersGitHub, getQueryIssues}  from '$lib/queries/issues'

export const load = async () => {
    const queryIssues  = getQueryIssues()

    const data  = await client({ query: queryIssues, fetch: fetch, endpoint: import.meta.env.VITE_GITHUB_ENDPOINT, headers: headersGitHub })

    return { issues:data }
}