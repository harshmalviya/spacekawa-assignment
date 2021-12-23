import { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Home/Header";
import UserInfo from "./components/Home/UserInfo";
import Users from "./components/Home/Users";
import UserContext from "./store/user-context";

function App() {
  const ctx = useContext(UserContext);
  useEffect(() => {
    ctx.getUsers();
    // eslint-disable-next-line
  }, [ctx.getUsers]);

  return (
    <>
      <Header />
      {ctx.selectedUser && <UserInfo data={ctx.selectedUser} />}
      {ctx.data && ctx.data.length > 0 && <Users data={ctx.data} />}
    </>
  );
}

export default App;
