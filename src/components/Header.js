import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from '../assets/logo3.png'

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="px-10 py-2 bg-violet-600"> {/*sticky top-0 */}
      <header className="flex justify-between items-center text-white font-bold">
        <div className="logo">
          <Link to="/"><img src={Logo} alt='Logo Image' style={{ width: '70px', height: '70px' }} /></Link>
        </div>
        {/* Menu lists */}
        <ul className="hidden md:flex">
          <li className="px-3">
            <Link to="about">About</Link>
          </li>
          <li className="px-3">
            <Link to="skills">Skills</Link>
          </li>
          <li className="px-3">
            <Link to="projects">Projects</Link>
          </li>
          <li className="px-3">
            <Link to="contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute lg:hidden top-0 left-0 w-full h-screen bg-violet-600 flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link to="about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="skills" onClick={handleClick}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="projects" onClick={handleClick}>
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="contact" onClick={handleClick}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
