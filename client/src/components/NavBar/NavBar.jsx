import {Link} from "react-router-dom";
import {UserBar} from "../UserBar/UserBar.jsx";

export const NavBar = () => {
    return (
        <nav>
            <ul className='flex gap-4'>
                <li className='text-slate-700 hover:underline'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='text-slate-700 hover:underline'>
                    <Link to='/about'>About</Link>
                </li>
                <UserBar/>
            </ul>
        </nav>
    )
}