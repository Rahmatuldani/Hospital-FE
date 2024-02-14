import { Navigate, Route, createBrowserRouter, createRoutesFromElements, isRouteErrorResponse, useRouteError } from "react-router-dom";
import App from "../App";
import AdminRouters from "./admin";
import ReceptionistRouters from "./receptionist";
import LoginPage from "../pages/login";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/auth/selector";
import { UserType } from "../store/users/types";

function RouteRedirect() {
    const userRole: UserType | null = useSelector(selectAuth);

    if (!userRole) {
        return <Navigate to={'/login'} replace/>;
    }
    return <Navigate to={`/${String(userRole.role).toLowerCase()}`} replace/>;
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
        <>
            <Route path="/" element={<App/>} errorElement={<ErrorBoundary/>}>
                <Route index element={<RouteRedirect/>}/>
                {AdminRouters()}
                {ReceptionistRouters()}
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
        </>
    )
);

export default Routers;