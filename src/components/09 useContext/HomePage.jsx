import React, { useContext } from 'react';
import UserContext from './UserContext';

const HomePage = () => {
  // busque la siguiente istancia de UserContext
  // pasamos un objeto como el value del UserContext
  // lo desetructuramos, el objeto es el use y el setUser
  const { user } = useContext(UserContext);
  return (
    <div className="container-fluid">
      <h1>HomePage</h1>
      <h2>Hello</h2>
      {JSON.stringify(user, null, 3)}
    </div>
  );
};

export default HomePage;
