"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  // const [sticky, setSticky] = useState(false);
  // const handleStickyNavbar = () => {
  //   if (window.scrollY >= 80) {
  //     setSticky(true);
  //   } else {
  //     setSticky(true);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleStickyNavbar);
  // });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
           "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                 "py-5 lg:py-2"
                } `}
              >
                <Image
                  src="/images/logo/1chanceLogo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full "
                />
              </Link>
            </div>
            
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
