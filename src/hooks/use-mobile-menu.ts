import { useState } from "react";

function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return { isOpen, toggleMenu };
}

export default useMobileMenu;
