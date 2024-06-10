import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase.js';
import {useDispatch} from "react-redux";
import {signInWithGoogle} from "../../redux/user/api.js";
import {FcGoogle} from "react-icons/fc";

export const OAuth = () => {
    const dispatch = useDispatch()

    const handleGoogleClick = async () => {
        dispatch(signInWithGoogle())
    }

    return (
        <button
            onClick={handleGoogleClick}
            type='button'
            className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 flex justify-center items-center gap-3'
        >
            <FcGoogle/>
            Continue with google
        </button>
    )
}