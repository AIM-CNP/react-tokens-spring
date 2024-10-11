import { useState } from 'react';

import './App.css';
import Login from './Login';
import Movies from './Movies';

function App() {
  const [loggedIn, setLoggedIn] = useState(null);

  return (
    <>
      <h1>Welcome to No You May Not</h1>
      {loggedIn ? <Movies /> : <Login setLoggedIn={setLoggedIn} />}
    </>
  );
}

export default App;
