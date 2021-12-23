import React, { useCallback, useState } from "react";

const UserContext = React.createContext({
  data: [],
  getUsers: () => {},
  getUser: (userId) => {},
  selectedUser: {}
});
export const UserContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUsers = useCallback(async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=20");
      const responseData = await response.json();
      setData(responseData.results);
    } catch (error) {}
  }, []);

  const getUser = (userId) => {
    if (data) {
      setSelectedUser(data.find((user) => user.login.uuid === userId));
    }
  };
  return (
    <UserContext.Provider
      value={{
        data,
        getUsers,
        getUser,
        selectedUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
