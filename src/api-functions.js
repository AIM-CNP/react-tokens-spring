import { BASE_URL } from './config';
import { grabToken } from './main';

export async function getToken(username, password) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'admin', password: 'admin' }),
  });
  const token = await res.json();
  return token.accessToken;
}

export async function getMovies() {
  const res = await fetch(`${BASE_URL}/movies`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${grabToken()}`,
    },
  });
  const data = await res.json();
  return data;
}
