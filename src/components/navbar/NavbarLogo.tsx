import React from "react";
import { cn } from "../../lib/utils";

interface NavbarLogoProps {
  className?: string;
}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex items-center text-lg transition-all duration-500 hover:scale-110",
        className
      )}
    >
      <img
        src="/images/Toploker.com.jpeg"
        alt="TopLoker Logo"
        className="h-8 w-auto rounded-full"
      />
      <span className="ml-2 text-md font-bold">
        <span className="text-[#f26522]">Top</span>
        <span className="text-[#4f2ca9]">Loker.com</span>
      </span>
    </div>
  );
};

export default NavbarLogo;
