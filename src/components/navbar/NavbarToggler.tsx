import React from "react";
import { Button } from "../../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, closeMenu } from "../../state/menuSlice";
import { RootState } from "../../state/store";
import { Menu, X } from "lucide-react";

export const NavbarToggler: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.menu.menuOpen);

  const handleClick = () => {
    if (isOpen) {
      dispatch(closeMenu());
    } else {
      dispatch(toggleMenu());
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative"
      onClick={handleClick}
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </Button>
  );
};
