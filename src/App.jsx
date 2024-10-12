import { useState, useEffect } from 'react';

import './App.css';
import Login from './Login';
import Movies from './Movies';

function App() {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      <h1>Welcome to No You May Not</h1>
      {loggedIn ? <Movies /> : <Login setLoggedIn={setLoggedIn} />}
    </>
  );
}

export default App;
