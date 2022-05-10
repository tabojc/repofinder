import { REPOSITORY_URL } from '../../utils/constants.js';

export function fetchAllRepositories({ keyword }) {
  //const base_url = 'http://localhost:3000/api'
  //const path = `repositories`
  const searchParams = new URLSearchParams({ name: keyword });

  const queryString = searchParams.toString();
  //const url = `${base_url}/${path}?${queryString}`
  const url = `${REPOSITORY_URL}?${queryString}`

  return fetch(`${url}`).then(response => response.json())
}
