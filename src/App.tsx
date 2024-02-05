import { Outlet } from "react-router-dom";
import { NavbarComponent } from "./components";

function App() {
  return (
    <>
      <NavbarComponent/>
      <Outlet/>
    </>
  );
}

export default App;