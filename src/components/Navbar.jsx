import React from 'react';
import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="flex items-center gap-1 font-bold text-xl">
                    <img className="w-10" src="logo.png" /> Ai Hub
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-10 px-1 text-lg">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Services</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <button className='btn p-2.5 text-red-500 rounded-full'>
                    <LuShoppingCart />
                </button>
                <a className="btn bg-red-500 rounded-full text-white font-bold">Get Started</a>
            </div>
        </div>
    );
};

export default NavBar;
