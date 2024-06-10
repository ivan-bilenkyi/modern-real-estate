import {Link} from "react-router-dom";

export const Logo = () =>  {
    return (
        <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Sahand</span>
                <span className='text-slate-700'>Estate</span>
            </h1>
        </Link>
    )
}