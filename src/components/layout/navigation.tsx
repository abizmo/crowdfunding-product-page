import useMediaQuery from "@/hooks/use-media-query";
import { NavLink } from "@/types";

import MobileNavigation from "./mobile-navigation";

interface NavigationProps {
  navLinks: NavLink[];
}

function Navigation({ navLinks }: NavigationProps) {
  const isMobile = useMediaQuery("(max-width: 40rem)");

  if (!isMobile)
    return (
      <nav>
        <ul className="flex gap-8 text-sm font-medium text-white">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    );

  return <MobileNavigation navLinks={navLinks} />;
}

export default Navigation;
