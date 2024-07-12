import Header from "./Header";
import { Outlet} from "react-router-dom";
import React from 'react';
import Footer from "./Footer";


export default function Layout(){

    return(
        <>
            <Header />
                <main className='bg-gray-100'>
                    <Outlet />
                </main>
            <Footer />
        </>
    )
}