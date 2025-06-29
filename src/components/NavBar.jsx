import { Home, User } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          {/* Replace this with your actual logo */}
          <svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9375 30C7.41935 30 0.5 23.101 0.5 14.608V0C9.01814 0 15.9375 6.89896 15.9375 15.392V30Z"
              fill="url(#paint0_linear_1_51)"
            />
            <path
              d="M17.2744 17.561V9.79965C17.2744 4.39024 21.6776 0 27.103 0V7.76132C27.103 13.1707 22.6998 17.561 17.2744 17.561Z"
              fill="url(#paint1_linear_1_51)"
            />
            <path
              d="M39.5002 29.9995H28.2301C22.1756 29.9995 17.2744 25.1128 17.2744 19.0762H28.5446C34.599 19.0762 39.5002 23.9629 39.5002 29.9995Z"
              fill="url(#paint2_linear_1_51)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_51"
                x1="0.5"
                y1="15"
                x2="15.9375"
                y2="15"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87FB" />
                <stop offset="1" stop-color="#FFD49C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_51"
                x1="17.2744"
                y1="8.78049"
                x2="27.103"
                y2="8.78049"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87FB" />
                <stop offset="1" stop-color="#FFD49C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1_51"
                x1="17.2744"
                y1="24.5378"
                x2="39.5002"
                y2="24.5378"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87FB" />
                <stop offset="1" stop-color="#FFD49C" />
              </linearGradient>
            </defs>
          </svg>

          <span className="text-lg font-semibold">znisa</span>
        </div>

        {/* Middle: Menu */}
        {/* Menu with gradient border */}
        <div className="p-[1.5px] rounded-[50px] bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]">
          <div className="flex items-center bg-[#1c1c1c] text-white rounded-[60px] px-2 py-[6px] pe-3 space-x-4 text-sm">
            <div className="bg-gray-700 px-3 py-1 rounded-full">
              <Home className="w-4 h-4" />
            </div>
            <a
              href="#about"
              className="relative hover:text-[var(--primary)] px-2 rounded-2xl"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-[var(--primary)] px-2 rounded-2xl"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-[var(--primary)] px-2 rounded-2xl"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-1">
          <div className="p-[1.3px] rounded-full bg-gradient-to-r  from-[var(--secondary)] to-[var(--primary)]">
            <button className=" px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-sm text-black font-medium">
              Hire me
            </button>
          </div>
          <div className="p-[1.3px] rounded-full bg-gradient-to-r  from-[var(--secondary)] to-[var(--primary)]">
            <button className="p-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 text-black">
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
