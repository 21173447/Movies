import React from 'react';
import img from '../Images/Rectangle 1.png';

const NavBar = () => {
  return (
    <header
      className="bg-cover bg-center h-96 relative"
      style={{ backgroundImage: `url(${img})` }}
    >
      <nav className="flex flex-col justify-between items-center w-[90%] mx-[5%] py-8 text-2xl relative z-10">
        <div className="flex justify-between w-full">
          <div>
            <span className="text-blue-400">Enter-</span>
            <span className="text-white">Stream</span>
          </div>

          <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500 text-white" href="#">
                  MOVIES
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 text-white" href="#">
                  SERIES
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <button className="bg-[#a6c1ee] text-white px-5 py-1 rounded-full hover:bg-[#87acec] text-2xl">
              SUBSCRIBE
            </button>
          </div>
        </div>

      
      </nav>
    </header>
  );
};

export default NavBar;
