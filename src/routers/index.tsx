import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import AdminRouters from "./admin";

const Routers = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            {AdminRouters()}
        </Route>
    )
);

export default Routers;