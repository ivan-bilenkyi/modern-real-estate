import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header.jsx";

export const AppLayout = () => {
    return (
        <div>
            <Header/>
            <main>
                <Suspense fallback={<></>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
};