/* eslint-disable import/prefer-default-export */
const GITHUB_API = 'https://api.github.com/search/repositories'
const GITHUB_HEADER = {'Accept': 'application/vnd.github.v3+json'}
const GITHUB_RATE_LIMIT =10;

const REPOSITORY_URL = 'http://localhost:3000/api/repositories'

//export default { GITHUB_API, GITHUB_HEADER, GITHUB_RATE_LIMIT }
export { GITHUB_API, GITHUB_HEADER, GITHUB_RATE_LIMIT, REPOSITORY_URL }