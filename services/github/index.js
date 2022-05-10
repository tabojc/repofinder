import { GITHUB_API, GITHUB_HEADER } from '../../utils/constants.js';

export function fetchAllGithub({ name, sortBy='created', orderBy='asc' }) {
    //const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
    //search method to look for a repository in github
    const repositoryName = name;
    const sortString = sortBy == 'created' ? 'sort:created': '';
    const orderString = orderBy == 'created' ? 'order:asc': '';
    //sort:created order:asc
    //SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N
    const queryString = 'q=' + encodeURIComponent(`${repositoryName} ${sortString} ${orderString}`);
 
    console.log({ url: `${GITHUB_API}?${queryString}`})

    //q=tetris+language:assembly&sort=stars&order=desc
    console.log('GITHUB_API', GITHUB_API)
    return fetch(`${GITHUB_API}?${queryString}`, {
        headers: {
            //'Accept': 'application/vnd.github.v3+json',
            ...GITHUB_HEADER,
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
      .then(response => response.text())
      .then(htmlString => JSON.parse(htmlString))

    //const htmlString = await response.text()

    //const results = JSON.parse(htmlString);
}
