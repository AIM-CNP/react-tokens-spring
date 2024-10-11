import { useState } from 'react';
import { getToken } from './api-functions';
import { setToken } from './main';

export default function Login({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    try {
      const token = await getToken(username, password);
      setToken(token);
      setLoggedIn(true);
      console.log('logged in', token);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={submit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="login" />
    </form>
  );
}
