import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
import {AppLayout} from "./components/AppLayout.jsx";
import {RestrictedRoute} from "./components/RestrictedRoute.jsx";
import {PrivateRoute} from "./components/PrivateRoute.jsx";
import CreateListing from "./pages/CreateListing.jsx";
import Listing from "./pages/Listing.jsx";
import UpdateListing from "./pages/UpdateListing.jsx";
import Search from "./pages/Search.jsx";

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
                <Route path="/sign-in" element={<RestrictedRoute component={SignIn} redirectTo="/" />} />
                <Route path="/sign-up" element={<RestrictedRoute component={SignUp} redirectTo="/" />} />
                <Route path="/profile" element={<PrivateRoute component={<Profile />} redirectTo="/sign-in" />} />
                <Route path="/create-listing" element={<PrivateRoute component={<CreateListing />} redirectTo="/sign-in" />} />
                <Route path="/update-listing/:listingId" element={<PrivateRoute component={<UpdateListing />} redirectTo="/sign-in" />} />
                <Route path="/about" element={<About />} />
                <Route path='/search' element={<Search />} />
                <Route path='/listing/:listingId' element={<Listing />} />
            </Route>
        </Routes>
    )
}