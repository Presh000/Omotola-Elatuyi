import React from "react";
import { useState } from "react"; // import state

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex  justify-between py-8 px-5 sm:px-20 md:px-32 lg:px-32 items-center  ">
      <a href="/">
        <span className="text-3xl font-semibold">Omotola Elatuyi</span>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {/* // toggle class based on isNavOpen state */}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]  ">
              <li className="hover:border-b-2  ">
                <a href="#" className=" text-[#1AABAC] font-bold text-xl">
                  Portfolio
                </a>
              </li>
              <li className="hover:border-b-2  ">
                <a
                  href="#kindWords"
                  className="text-[#1AABAC] font-bold text-xl"
                >
                  Kind words
                </a>
              </li>
              <li className="hover:border-b-2  ">
                <a href="/about" className="text-[#1AABAC] font-bold text-xl">
                  About
                </a>
              </li>
              <li className="hover:border-b-2  ">
                <a href="#" className="text-[#1AABAC] font-bold text-xl">
                  Say Hi!
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a
              href="#"
              className="block text-[#1AABAC] font-bold text-s delay-100 border-b-2 border-b-transparent hover:border-b-[#EC2E57]  hover:text-[#EC2E57]"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#kindWords"
              className="block text-[#1AABAC] font-bold text-s delay-100 hover:border-b-2 hover:border-b-[#EC2E57]  hover:text-[#EC2E57]"
            >
              Kind words
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block text-[#1AABAC] font-bold text-s delay-100 hover:border-b-2 hover:border-b-[#EC2E57]  hover:text-[#EC2E57]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/connect"
              className="block text-[#1AABAC] font-bold text-s delay-100 hover:border-b-2 hover:border-b-[#EC2E57]  hover:text-[#EC2E57]"
            >
              Say Hi!
            </a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default Header;
