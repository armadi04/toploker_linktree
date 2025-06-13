import React from "react";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarToggler } from "./NavbarToggler";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { closeMenu } from "../../state/menuSlice";

interface NavbarMainProps {
  className?: string;
}

export const NavbarMain: React.FC<NavbarMainProps> = ({ className }) => {
  const menuOpen = useSelector((state: RootState) => state.menu.menuOpen);
  const dispatch = useDispatch();

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      dispatch(closeMenu());
    }
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-l from-slate-900 to-gray-900 border-b border-purple-900 border-opacity-20 z-50">
      <nav className={cn("mx-auto py-0 px-0 text-white", className)}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between cursor-pointer pl-4">
            {/* Logo */}
            <NavbarLogo />

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4 text-gray-300 ml-auto gap-4 pr-4">
              {[
                "instagram",
                "facebook",
                "telegram",
                "tiktok",
                "youtube",
                "whatsapp",
              ].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-md hover:bg-gray-900 hover:text-blue-600 px-2"
                  size="sm"
                  onClick={() => handleNavigation(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              ))}
            </div>

            {/* Toggler Mobile */}
            <div className="lg:hidden flex items-center">
              {!menuOpen && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-bold tracking-wide text-white px-2 py-1 text-md"
                  onClick={() =>
                    dispatch(
                      menuOpen
                        ? closeMenu()
                        : require("../../state/menuSlice").toggleMenu()
                    )
                  }
                >
                  MENU
                </Button>
              )}
              <NavbarToggler />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "w-full items-center justify-center bg-slate-900/80 transition-all duration-300 ease-in-out",
            menuOpen ? "block" : "hidden"
          )}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col items-stretch space-y-3 bg-slate-800/40 rounded-xl p-4">
              {[
                "instagram",
                "facebook",
                "telegram",
                "tiktok",
                "youtube",
                "whatsapp",
              ].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-md hover:bg-slate-800/50 hover:text-blue-600 w-full justify-center text-center py-2 rounded-lg"
                  size="sm"
                  onClick={() => handleNavigation(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarMain;
