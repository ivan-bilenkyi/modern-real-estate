import {Link} from "react-router-dom";

export const UserBar = () => {
    return (
        <li className=' text-slate-700 hover:underline'>
            <Link to='/profile'>
                Sign in
            </Link>
        </li>
    )
}