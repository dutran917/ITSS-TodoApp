import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { RootState } from "../redux";

interface ProtectedRouteProps {
    isAuthRoute: boolean;
    isProtectedRoute: boolean;
    path: string;
    Component: any;
}
const ProtectedRoute = ({
    isAuthRoute,
    isProtectedRoute,
    Component,
    path,
}: ProtectedRouteProps) => {
    const isAuth = useSelector((state: RootState) => state.auth.auth);
    return (
        <Route
            path={path}
            render={(props) => {
                if (isAuth && isAuthRoute) {
                    return <Redirect to="/"></Redirect>;
                }
                if (!isAuth && isProtectedRoute) {
                    return <Redirect to="/login"></Redirect>;
                }
                return <Component {...props}></Component>;
            }}
        ></Route>
    );
};

export default ProtectedRoute;
