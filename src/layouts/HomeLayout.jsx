import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/Header/NavBar';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header className='border-b-2 border-base-300'>
                <NavBar></NavBar>
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;