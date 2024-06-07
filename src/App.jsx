import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
import {AppLayout} from "./components/AppLayout.jsx";

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
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    )
}