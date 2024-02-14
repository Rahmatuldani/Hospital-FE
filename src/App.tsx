import { Navigate, Outlet, useLocation } from "react-router-dom";
import { NavbarComponent } from "./components";
import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "./store/auth/selector";
import { UserType } from "./store/users/types";

function App() {
  const currentUser: UserType | null = useSelector(selectAuth);
  const location = useLocation().pathname.split('/').filter(part => part !== '');

  React.useEffect(() => {
    document.body.className = 'nav-fixed';
  }, []);

  if (!currentUser) {
    return <Navigate to={'/login'} replace/>;
  }

  if (location[0] !== currentUser.role.toLowerCase()) {
    return <Navigate to={`/${currentUser.role.toLowerCase()}`} replace/>;
  }
  
  return (
    <>
      <NavbarComponent/>
      <Outlet/>
    </>
  );
}

export default App;