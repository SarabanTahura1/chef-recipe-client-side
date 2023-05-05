import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthInfoProvider } from "../../Provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthInfoProvider);
  console.log(user);
  return (
    <div className="bg-green-500">
      {/* navbar start */}
      <div className="navbar  container mx-auto">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <Link to="/login">
              <button className="btn bg-purple-700 text-white border-0">
                Login
              </button>
            </Link>
          </ul>
        </div>
        <div className="flex-1">
          <Link to="/" className="min-w-max normal-case font-bold text-xl">
            Simply Recipe
          </Link>
        </div>
        <div className="flex-none navbar-end ">
          <ul className="menu   menu-horizontal px-1 hidden lg:flex font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline text-white" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "underline text-white" : ""
                }
              >
                Blog
              </NavLink>
            </li>
            {user ? (
              <div>
                <label
                  className="btn btn-ghost btn-circle relative
               "
                >
                  <div
                    tabIndex={0}
                    className="relative inline-block group  btn-circle avatar"
                  >
                    <img
                      className="w-8 rounded-full"
                      src={user && user.photoURL}
                      
                    />
                    <ul
                      className="absolute right-0 px-4  z-10 w-48 py-4 text-start bg-gray-800 text-white
                   rounded-lg shadow-lg hidden group-hover:block"
                    >
                      <li className="py-2">
                        <a className="justify-between">{user.displayName}</a>
                      </li>

                      <li className="py-2">
                        <a>Sign Out</a>
                      </li>
                    </ul>
                  </div>
                </label>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn bg-gradient-to-r from-indigo-700 to-purple-700"
              >
                Login
              </Link>
            )}
            {/* <Link to="/login">
              <button className="btn bg-purple-700 text-white border-0">
                Login
              </button>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
