import React, { useContext } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/shared/auth-context";

function App() {
  const ctx =useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedInisLoggedIn && <Login />}
        {ctx.isLoggedInisLoggedIn && <Home  />}
      </main>
    </React.Fragment>
  );
}

export default App;
