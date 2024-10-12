import { useEffect, useState } from 'react';
import { getMovies } from './api-functions';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setToken(sessionStorage.getItem('token'));
    }
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getMovies(token);
      setMovies(result);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      {movies.map((m) => (
        <p key={m.movieid}>{m.name}</p>
      ))}
    </div>
  );
}
