import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import userPic from '../../assets/user.png';
import toast from "react-hot-toast";


const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);
    console.log(user)


    const hundleSignOut = () => {
        logOut()
            .then(result => {
                toast.success('You are logged out')
            })
            .catch(error => {

            })
    }

    const navLinks = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-purple-900 rounded-3xl text-white font-semibold" : ""
            }
        >
            Home
        </NavLink></li>

        <li><NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-purple-900 rounded-3xl text-white font-semibold" : ""
            }
        >
            About
        </NavLink></li>

        <li><NavLink
            to="/service"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-purple-900 rounded-3xl text-white font-semibold" : ""
            }
        >
            Service
        </NavLink></li>
        <li><NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-purple-900 rounded-3xl text-white font-semibold" : ""
            }
        >
            Blog
        </NavLink></li>
        <li><NavLink
            to="/support"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-purple-900 rounded-3xl text-white font-semibold" : ""
            }
        >
            Support
        </NavLink></li>

        <li><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-purple-900 rounded-3xl text-white font-semibold" : ""
            }
        >
            Login
        </NavLink></li>
    </>
    return (
        <div className="bg-purple-200 ">
            <div className="navbar  container mx-auto px-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-8" src={logo} alt="" />
                        <a href="" className="text-xl font-bold">Training Programs</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <div className="flex gap-2 items-center">
                                <div className="flex items-center"><img className="w-10" src={userPic} alt="" />
                                <p>{user.displayName}</p>
                                <p>{user.email}</p>
                                </div>
                                <button onClick={hundleSignOut} className="btn bg-purple-900 rounded-3xl text-white font-semibold hover:bg-purple-600 ">Log Out</button>
                            </div>
                            :
                            <Link to='/login'>
                                <button className="btn bg-purple-900 rounded-3xl text-white font-semibold hover:bg-purple-600 ">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;