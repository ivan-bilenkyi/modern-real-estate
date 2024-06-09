import {Link} from "react-router-dom";
import {selectCurrentUser} from "../../redux/user/selectors.js";
import {useSelector} from "react-redux";

export const UserBar = () => {
    const currentUser = useSelector(selectCurrentUser);
    return (
            <li className='text-slate-700 hover:underline'>
                <Link to='/profile'>
                    {currentUser ? (
                        <img
                            className='rounded-full h-7 w-7 object-cover'
                            src={currentUser.avatar}
                            alt='profile'
                        />
                    ) : (
                         'Sign in'
                    )}
                </Link>
            </li>
    )
}


