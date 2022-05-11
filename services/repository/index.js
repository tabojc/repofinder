import { REPOSITORY_URL } from '../../utils/constants.js';

export function fetchAllRepositories({ keyword, perPage, page }) {
  const searchParams = new URLSearchParams({ name: keyword, per_page: perPage, page });

  const queryString = searchParams.toString();

  const url = `${REPOSITORY_URL}?${queryString}`

  return fetch(`${url}`).then(response => response.json())
}
