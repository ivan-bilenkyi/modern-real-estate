import {FormSearch} from "./Forms/FormSearch.jsx";
import {NavBar} from "./NavBar/NavBar.jsx";
import {Logo} from "./Logo.jsx";

export default function Header() {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Logo/>
                <FormSearch/>
                <NavBar/>
            </div>
        </header>
    )
}