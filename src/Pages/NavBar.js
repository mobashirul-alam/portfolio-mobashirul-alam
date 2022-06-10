import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/Mobashirul-Alam-Seam-Resume.pdf';

const NavBar = () => {

    const menu = <>
        <li><Link to={'/'}>About</Link></li>
        <li><Link to={'/blogs'}>Blogs</Link></li>
        <li><a href="#services">Services</a></li>
        <li><Link to={'/'}>Projects</Link></li>
        <li><a href="#contactMe">Contact Me</a></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Mobashirul</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                    <a href={resume} className="btn" download>Resume</a>
                </ul>
            </div>
            <div className='navbar-end visible lg:hidden'>
                <a href={resume} className="btn" download>Resume</a>
            </div>
        </div>
    );
};

export default NavBar;