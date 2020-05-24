import axios from 'axios';

interface githubResponse {
  github: string;
}

export async function fetchUsers(
  username: string
): Promise<githubResponse> {
  return axios.get(`https://api.github.com/search/users?q=${username}&per_page=5`);
}

export async function fetchRepositories(
  login: string
): Promise<githubResponse> {
  return axios.get(`https://api.github.com/users/${login}/repos`);
}
