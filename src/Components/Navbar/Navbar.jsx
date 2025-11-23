import React from 'react';
import { NavLink } from 'react-router';
import Logo from '../../assets/logo.png'
import Git from '../../assets/github.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to='/' >Home</NavLink>
                            <NavLink to='/apps' >Apps</NavLink>
                            <NavLink to='/installation' >Installation</NavLink>
                        </ul>
                    </div>
                    <div className='flex items-center' >
                        <img src={Logo} alt="" className='max-w-[35px] max-h-[35px] '  />
                        <a className="btn btn-ghost text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <NavLink to='/' >Home</NavLink>
                        <NavLink to='/apps' >Apps</NavLink>
                        <NavLink to='/installation' >Installation</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/ASIFFORIZY' target="_blank" className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"><img src={Git} alt="" /> Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;