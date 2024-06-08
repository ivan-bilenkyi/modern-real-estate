import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase.js';
import {useDispatch} from "react-redux";
import {signInWithGoogle} from "../../redux/user/api.js";

export const OAuth = () => {
    const dispatch = useDispatch()

    const handleGoogleClick = async () => {
        dispatch(signInWithGoogle())
    }

    return (
        <button
            onClick={handleGoogleClick}
            type='button'
            className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
        >
            Continue with google
        </button>
    )
}