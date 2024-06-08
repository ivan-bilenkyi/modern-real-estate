import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import {selectCurrentUser} from "../redux/user/selectors.js";


export const PrivateRoute = ({component: Component, redirectTo = "/"}) => {
    const currentUser = useSelector(selectCurrentUser);

    return !currentUser ? <Navigate to={redirectTo} /> : Component;
}