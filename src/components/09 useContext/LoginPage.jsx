import React, { useContext } from 'react';
import UserContext from './UserContext';

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div className="container-fluid">
      <h1>LoginPage</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setUser({ id: 123, name: 'fernando' });
        }}
        type="button"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
