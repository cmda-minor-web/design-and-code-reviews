export const headersGitHub = {
    authorization: 'token ' + import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN
}
export function getReceivedIssues() {
  return `query ReceivedIssues {
      repository(owner: "cmda-minor-web", name: "web-app-from-scratch-2223") {
        name
        forks(first: 100) {
          nodes {
            owner{
              login
              url
              avatarUrl
            }
            name
            nameWithOwner
            issues(first: 100) {
              nodes {
                number
                title
                body
                createdAt
                updatedAt
                closed
                closedAt
                author {
                  login
                }
                url
              }
            }
          }
        }
      }
    }
    `
}

export function getSubmittedIssues(){
  return `query SearchIssues($queryString: String!) {
    search(query: $queryString, type: ISSUE, first: 100) {
      issueCount
      edges {
        node {
          ... on Issue {
            number
            title
            body
            createdAt
            updatedAt
            closed
            closedAt
            author {
              login
            }
            url
            repository {
              nameWithOwner
              isFork
              parent {
                nameWithOwner
              }
            }
          }
        }
      }
    }
  }`
}

