export const headersGitHub = {
    authorization: 'token ' + import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN
}
export function getQueryIssues() {
    return `query Issues {
      repository(owner: "cmda-minor-web", name: "web-app-from-scratch-2223") {
        name
        forks(first: 100) {
          nodes {
            owner{
              login
              url
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

