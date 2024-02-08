import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import AdminRouters from "./admin";

function RouteRedirect() {
    const userRole: string = 'Administrator';

    return <Navigate to={`/${userRole.toLowerCase()}`} replace/>;
}

const Routers = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<RouteRedirect/>}/>
            {AdminRouters()}
        </Route>
    )
);

export default Routers;