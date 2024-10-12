import { BASE_URL } from './config';

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
  window.sessionStorage.setItem('token', token.accessToken);
  return token.accessToken;
}

export async function getMovies() {
  const token = window.sessionStorage.getItem('token');
  if (token) {
    const res = await fetch(`${BASE_URL}/movies`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } else {
    throw new Error('No Token');
  }
}
