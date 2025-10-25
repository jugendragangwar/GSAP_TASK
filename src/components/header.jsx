import { useState, useEffect } from "react";
import bannerBg from "../assets/Banner -BG.png";

function Header() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className="w-full min-h-[70vh] flex flex-col items-center text-white relative"
      style={{
        backgroundColor: "#000000",
        backgroundImage: `url(${bannerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
      }}
    >
      {/* Navbar */}
      <nav
        className={`w-full flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4 text-gray-300 text-sm fixed top-0 left-0 bg-transparent backdrop-blur-sm z-20 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="text-lg font-semibold tracking-tight">UzOPay</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <a href="#" className="hover:text-white transition duration-300">Products</a>
          <a href="#" className="hover:text-white transition duration-300">AI Banking</a>
          <a href="#" className="hover:text-white transition duration-300">Payments</a>
          <a href="#" className="hover:text-white transition duration-300">Payouts</a>
          <a href="#" className="hover:text-white transition duration-300">Contact us</a>
        </div>

        {/* Right buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <button className="text-gray-300 hover:text-white transition duration-300">Log in</button>
          <button className="relative px-5 py-2 rounded-full text-white font-medium overflow-hidden border border-white hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.6)] transition-all duration-300">
            Sign up
          </button>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"
                 style={{ transform: mobileMenuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"
                 style={{ opacity: mobileMenuOpen ? 0 : 1 }} />
            <div className="w-6 h-0.5 bg-white transition-all duration-300"
                 style={{ transform: mobileMenuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center md:hidden py-6 space-y-4 z-10">
            <a href="#" className="hover:text-white transition duration-300">Products</a>
            <a href="#" className="hover:text-white transition duration-300">AI Banking</a>
            <a href="#" className="hover:text-white transition duration-300">Payments</a>
            <a href="#" className="hover:text-white transition duration-300">Payouts</a>
            <a href="#" className="hover:text-white transition duration-300">Contact us</a>
            <div className="flex flex-col space-y-2 mt-4">
              <button className="text-gray-300 hover:text-white transition duration-300">Log in</button>
              <button className="px-5 py-2 rounded-full text-white font-medium border border-white hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.6)] transition-all duration-300">
                Sign up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Divider line just below navbar */}
      <div className="w-full h-[1px] bg-white mt-[72px]" />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-4 sm:px-6 lg:px-0">
        <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-snug">
          New Era of Finance Solutions
        </h1>

        <p className="text-gray-300 mb-8 text-base sm:text-lg">
          Fast Funds, Flexible Choices: Quick Settlement & Multiple Payment Methods
        </p>

        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-gray-200 to-gray-100 text-black font-medium hover:opacity-90 transition border border-gray-300">
          Explore more
        </button>

        <p className="text-gray-400 mt-10 text-sm sm:text-base tracking-wide">
          Empowering Your Financial Future, Today and Tomorrow ✦ One Stop Solution
        </p>
      </div>
    </div>
  );
}

export default Header;
