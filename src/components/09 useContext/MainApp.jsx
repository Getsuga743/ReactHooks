/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import AppRouter from './AppRouter';
import UserContext from './UserContext';

const MainApp = () => {
  const [user, setUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
};
// envolvemos con el userContext lo q queremos q comaprta la informacion de
// Use context
export default MainApp;
