import React, { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
