import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Aic, Aim, ptuLogo } from "../assets/logos/logs";
import { NavbarDemo } from "./Navbar";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

const NavbarOG = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State for popup visibility
  const [aimClickCount, setAimClickCount] = useState(0); // State for tracking Aim logo clicks
  const navigate = useNavigate();

  const handleLogoClick = () => {
    setAimClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 3) {
        setShowLoginPopup(true); // Show login popup on the third click
        return 0; // Reset count
      }
      return newCount;
    });
  };

  const closePopup = () => {
    setShowLoginPopup(false); // Close the popup
  };

  const goToHome = () => {
    navigate("/"); // Navigate to home page
  };

  ///////////////////

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenue = () => {
    setIsOpen(!isOpen);
  };

  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const hideAll = () => {
    setIsPartnersOpen(false);
    setIsProgramsOpen(false);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="relative py-6 gap-10 md:hidden sm:block">
        <div
          className={
            !isOpen
              ? "fixed z-10 w-full top-0 h-screen bg-slate-950 transition-all backdrop-blur-lg ease-in-out bg-opacity-40 "
              : "fixed z-10 w-full hidden -left-full top-0 h-screen bg-slate-950 transition-all backdrop-blur-lg ease-in-out bg-opacity-40 "
          }
          onClick={toggleMenue}
        ></div>

        <div className="">
          <nav className="flex items-center justify-between">
            <a href="/">
              {" "}
              <div className="flex ml-2">
                <img className="w-10 mr-2" src={ptuLogo} alt="" />
                <img className="w-10" src={Aic} alt="" />
              </div>
            </a>

            {/* <div className="text-5xl font-bold">AIC</div> */}

            <ul
              className={
                isOpen
                  ? " flex-col  absolute justify-evenly text-2xl top-4 space-y-7  p-7 -left-full z-20 transition-all  menue"
                  : "flex-col text-white absolute justify-evenly text-2xl top-4 space-y-4  p-7 left-0 z-20 transition-all  menue"
              }
            >
              <div
                className={
                  isOpen
                    ? "hidden"
                    : "fixed z-10 right-0 top-6 cursor-pointer text-6xl"
                }
                onClick={toggleMenue}
              >
                <IoCloseSharp />
              </div>

              <li onClick={hideAll}>
                <NavLink to="/">Home</NavLink>
              </li>
              <hr />
              <li onClick={hideAll}>
                <NavLink to="/">Portfolio</NavLink>
              </li>
              <hr />
              <li className="flex items-center  space-x-6">
                <NavLink to="/" onClick={hideAll}>
                  Programs
                </NavLink>
                <div onClick={() => setIsProgramsOpen(!isProgramsOpen)}>
                  <FaAngleDown
                    className={!isProgramsOpen ? "block" : "hidden"}
                  />
                  <FaAngleRight
                    className={isProgramsOpen ? "block" : "hidden"}
                  />
                </div>
              </li>
              <div
                onClick={hideAll}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isProgramsOpen
                    ? "max-h-[300px] opacity-100 ml-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <li>
                  <NavLink to="/academicPartners">Pre-Incubate</NavLink>
                  <hr />
                </li>
                <li>
                  <NavLink to="/cooperativePartners">Incubate</NavLink>
                  <hr />
                </li>
                <li>
                  <NavLink to="/ipSupporters">Incubation</NavLink>
                  <hr />
                </li>
                <li>
                  <NavLink to="/networkingPartners">Incubation</NavLink>
                  <hr />
                </li>
              </div>
              <hr />

              <li className="flex items-center  space-x-6">
                <NavLink onClick={hideAll} to="/partners">
                  Partners
                </NavLink>
                <div onClick={() => setIsPartnersOpen(!isPartnersOpen)}>
                  <FaAngleDown
                    className={!isPartnersOpen ? "block" : "hidden"}
                  />
                  <FaAngleRight
                    className={isPartnersOpen ? "block" : "hidden"}
                  />
                </div>
              </li>
              <div
                onClick={hideAll}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isPartnersOpen
                    ? "max-h-[300px] opacity-100 ml-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <li>
                  <NavLink to="/academicPartners">Academic Partners</NavLink>
                  <hr />
                </li>
                <li>
                  <NavLink to="/cooperativePartners">
                    Cooperative Partners
                  </NavLink>
                  <hr />
                </li>
                <li>
                  <NavLink to="/ipSupporters">Ip Supporters</NavLink>
                  <hr />
                </li>
                <li>
                  <NavLink to="/networkingPartners">
                    Networking Partners
                  </NavLink>
                  <hr />
                </li>
                <li>
                  <NavLink to="/investmentPartner">Investment Partner</NavLink>
                  <hr />
                </li>
              </div>
              <hr />

              <li>
                <NavLink onClick={hideAll} to="/events">
                  Events
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink onClick={hideAll} to="/fundng">
                  Funding
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink onClick={hideAll} to="/tenders">
                  Tenders
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink onClick={hideAll} to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <hr />
            </ul>
            {/* <div
              className=" cursor-pointer text-4xl mr-2"
              onClick={toggleMenue}
            >
              <FaBars />
            </div> */}

            <div
              className="cursor-pointer text-4xl mr-2 transition-transform duration-300 ease-in-out"
              onClick={toggleMenue}
            >
              <div
                className={`transform transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                }`}
              >
                <FaBars className={`${isOpen ? "block" : "hidden"}`} />
              </div>
              <div
                className={`transform transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <IoCloseSharp className={`${isOpen ? "hidden" : "block"}`} />
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="relative py-6 justify-center gap-10 items-center hidden md:flex">
        <div className="flex gap-10 items-center border-b-4 rounded-3xl border-customBlue px-5 bg-white">
          <div className="w-16 h-16 cursor-pointer" onClick={goToHome}>
            <img
              src={Aic}
              className="w-full h-full object-contain"
              alt="AIC Logo"
            />
          </div>
          <div className="w-16 h-16 cursor-pointer" onClick={goToHome}>
            <img
              src={ptuLogo}
              className="w-full h-full object-contain"
              alt="PTU Logo"
            />
          </div>
        </div>
        <div className="w-fit scale-95">
          <NavbarDemo />
        </div>
        <div className="max-w-32 h-16 flex items-center border-b-4 rounded-3xl border-customBlue px-5 bg-white">
          <div className="w-16 h-16 cursor-pointer" onClick={handleLogoClick}>
            <img
              src={Aim}
              alt="Aim Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {showLoginPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
              <h2 className="text-xl font-bold mb-4">Login</h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarOG;
