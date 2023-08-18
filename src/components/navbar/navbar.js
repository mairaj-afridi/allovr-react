import React, { useState } from "react";
import { Link } from "react-scroll";
// hamburger
import { Spin as Hamburger } from "hamburger-react";
// drawer
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
// react icons
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full max-w-[1240px]  m-auto px-2 md:px-4 z-50  h-[6.5rem] mt-0  items-centers fixed  justify-center text-white">
      <div className="flex cursor-pointer justify-between items-center pt-[2rem] sm:pt-[3rem]  pl-[2rem] pr-[2rem] sm:pl-[3rem]  sm:pr-[3rem] sticky ">
        {/* logo */}

        <Link to="hero" smooth={true} duration={600}>
          <img
            src="/logo.png"
            className="w-[6.45rem] h-[1.7rem] sm:w-[150px] flex-shrink-0 sm:h-[40.774px] "
            alt=""
          ></img>
        </Link>
        <div className="   justify-center items-center flex font-medium	gap-10">
          <ul className="hidden gap-[32px] cursor-pointer justify-between font-Work Sans text-[20px] font-normal lg:flex">
            {links.map((item, index) => {
              return (
                <li className="capitalize" key={index}>
                  <Link to={item.to} smooth={true} duration={600}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className=" items-center hidden  lg:flex  w-[15rem]   rounded-[64px]	border-solid border-white border-[1px]	">
            <img
              src="/phantom.png"
              className="m-[13px] w-[21px] flex-shrink-0 h-[21px] "
              alt=""
            ></img>
            <button className=" text-[12px] bg-transparent cursor-pointer font-medium font- Space Grotesk ">
              CONNECT PHANTOM WALLET
            </button>
          </div>
        </div>
        {/* humburger */}
        <div className="lg:hidden flex justify-end items-center">
          <Hamburger
            color="pink"
            rounded
            size={30}
            toggled={isOpen}
            toggle={setIsOpen}
          />
          <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            direction="right"
            className="drawer"
          >
            <div className="justify-end items-end flex  mt-10 mr-[50px] ">
              <h3 className="text-[2.5rem] text-[#ED1E79] ">
              
                <RxCross2 
                onClick={() => setIsOpen(false)}
                smooth={true} duration={600}
                />
              </h3>
            </div>

            <div className="flex flex-col pb-[2rem] pt-[5rem] gap-[2rem]  p-6 justify-center items-center">
              <Link to="hero" smooth={true} duration={600}>
                <img
                  src="/logo.png"
                  className="text-black w-[6.5rem] h-[1.7rem] sm:w-[150px] flex-shrink-0 sm:h-[40.774px] "
                  alt=""
                ></img>
              </Link>

              <ul className="text-center gap-[1.5rem] cursor-pointer justify-between font-Work Sans text-[20px] font-normal flex flex-col">
                {links.map((item, index) => {
                  return (
                    <li className="capitalize text-[#FFF]" key={index}>
                      <Link to={item.to} smooth={true} duration={600}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className=" items-center flex  w-[15rem]   rounded-[64px]	border-solid border-white border-[1px]	">
                <img
                  src="/phantom.png"
                  className="m-[13px] w-[21px] flex-shrink-0 h-[21px] "
                  alt=""
                ></img>
                <button className=" text-[12px] bg-transparent cursor-pointer font-medium font- Space Grotesk ">
                  CONNECT PHANTOM WALLET
                </button>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

const links = [
  {
    name: "about",
    to: "about",
  },
  {
    name: "      How it Works",
    to: "working",
  },
  {
    name: "Stacking",
    to: "stakingpool",
  },
];
export default Navbar;
