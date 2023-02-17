export const headersGitHub = {
    authorization: 'token ' + import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN
}
export function getQueryIssues() {
    return `query Issues {
      repository(owner: "cmda-minor-web", name: "web-app-from-scratch-2223") {
        forks(first: 100) {
          nodes {
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
              }
            }
          }
        }
      }
    }
    `
}

