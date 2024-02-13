import { Navigate, Route, createBrowserRouter, createRoutesFromElements, isRouteErrorResponse, useRouteError } from "react-router-dom";
import App from "../App";
import AdminRouters from "./admin";
import ReceptionistRouters from "./receptionist";

function RouteRedirect() {
    const userRole: string = 'Receptionist';

    return <Navigate to={`/${userRole.toLowerCase()}`} replace/>;
}

function ErrorBoundary() {
    const error = useRouteError();

    return isRouteErrorResponse(error) ? (
        <h1>{error.status} {error.statusText} - {error.data}</h1>
    ) : (
        <h1>{String(error)}</h1>
    );
}

const Routers = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} errorElement={<ErrorBoundary/>}>
            <Route index element={<RouteRedirect/>}/>
            {AdminRouters()}
            {ReceptionistRouters()}
        </Route>
    )
);

export default Routers;