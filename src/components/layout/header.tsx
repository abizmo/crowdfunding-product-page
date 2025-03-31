import hamburgerIcon from "@/assets/icons/hamburger.svg";
import closeIcon from "@/assets/icons/close-menu.svg";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <header className="container flex items-center justify-between py-8 sm:py-12">
      <a href="/">
        <img src="/images/logo.svg" alt="crowfund" />
      </a>
      <nav className="hidden sm:block">
        <ul className="flex gap-8 text-sm font-medium text-white">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/discover">Discover</a>
          </li>
          <li>
            <a href="/get-started">Get Started</a>
          </li>
        </ul>
      </nav>
      <nav
        className={`absolute inset-0 bg-linear-to-b from-black/75 to-black/50 px-6 py-20 sm:hidden ${isOpen ? "" : "hidden"}`}
      >
        <ul className="bg-card overflow-hidden rounded-xl text-lg font-medium text-black">
          <li>
            <a className="block border-b border-neutral-200 p-6" href="/about">
              About
            </a>
          </li>
          <li>
            <a
              className="block border-b border-neutral-200 p-6"
              href="/discover"
            >
              Discover
            </a>
          </li>
          <li>
            <a className="block p-6" href="/get-started">
              Get Started
            </a>
          </li>
        </ul>
      </nav>
      <div className="absolute right-6 sm:hidden">
        <button className="p-2" onClick={toggleMenu}>
          {isOpen ? (
            <img src={closeIcon} alt="close" />
          ) : (
            <img src={hamburgerIcon} alt="menu" />
          )}
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
