import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
import {AppLayout} from "./components/AppLayout.jsx";
import {RestrictedRoute} from "./components/RestrictedRoute.jsx";
import {PrivateRoute} from "./components/PrivateRoute.jsx";

const Home = lazy(() => import('./pages/Home.jsx'));
const SignIn = lazy(() => import('./pages/SignIn.jsx'));
const SignUp = lazy(() => import('./pages/SignUp.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Profile = lazy(() => import('./pages/Profile.jsx'));


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-in" element={<RestrictedRoute component={<SignIn />} redirectTo="/" />} />
                <Route path="/sign-up" element={<RestrictedRoute component={<SignUp />} redirectTo="/" />} />
                <Route path="/profile" element={<PrivateRoute component={<Profile />} redirectTo="/" />} />
            </Route>
        </Routes>
    )
}