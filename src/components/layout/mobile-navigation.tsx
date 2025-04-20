import CloseMenuIcon from "@/assets/icons/close-menu-icon";
import HamburgerIcon from "@/assets/icons/hamburger-icon";
import useMobileMenu from "@/hooks/use-mobile-menu";
import { NavLink } from "@/types";

interface MobileNavigationProps {
  navLinks: NavLink[];
}

function MobileNavigation({ navLinks }: MobileNavigationProps) {
  const { isOpen, toggleMenu } = useMobileMenu();

  return (
    <>
      <nav
        className={`fixed inset-0 z-10 bg-linear-to-b from-black/75 to-black/50 px-6 py-20 ${isOpen ? "" : "hidden"}`}
      >
        <ul className="bg-card overflow-hidden rounded-xl text-lg font-medium text-black">
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              className="not-last:border-b not-last:border-neutral-200"
            >
              <a href={href} className="block p-6">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="fixed right-6 z-20">
        <button className="p-2" onClick={toggleMenu}>
          {isOpen ? <CloseMenuIcon /> : <HamburgerIcon />}
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
    </>
  );
}

export default MobileNavigation;
