import { GITHUB_API, GITHUB_HEADER } from '../../utils/constants.js';

export function fetchAllGithub({ name, sortBy='created', orderBy='asc', page=0, per_page=100 }) {
    const repositoryName = name ? name : ''
    const sortString = sortBy == 'created' ? 'sort:created': `sort:${sortBy}`
    const orderString = orderBy == 'asc' ? 'order:asc': `order:${orderBy}`
    const pagination = new URLSearchParams({ page, per_page });
    const pageString = pagination.toString() ? `&${pagination.toString()}` : ''
 
    const queryString = 'q=' + encodeURIComponent(`${repositoryName}${sortString}${orderString}`)+`${pageString}`
    console.log({ queryString })
    return fetch(`${GITHUB_API}?${queryString}`, {
        headers: {
            ...GITHUB_HEADER,
        },
    })
      .then(response => response.text())
      .then(htmlString => JSON.parse(htmlString))
}
