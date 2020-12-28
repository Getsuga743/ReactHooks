import React, { useContext } from 'react';
import UserContext from './UserContext';

const AboutPage = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h1>AboutScreen</h1>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          setUser({});
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default AboutPage;
