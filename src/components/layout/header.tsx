import Navigation from "./navigation";

function Header() {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/discover", label: "Discover" },
    { href: "/get-started", label: "Get Started" },
  ];

  return (
    <header className="absolute inset-x-0 top-0">
      <div className="container flex min-h-20 items-center justify-between sm:py-12">
        <a href="/">
          <img src="/images/logo.svg" alt="crowfund" />
        </a>
        <Navigation navLinks={navLinks} />
      </div>
    </header>
  );
}

export default Header;
