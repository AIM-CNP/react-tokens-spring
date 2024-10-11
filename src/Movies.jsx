import { useEffect, useState } from 'react';
import { getMovies } from './api-functions';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getMovies();
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
