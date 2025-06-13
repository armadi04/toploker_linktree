import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../state/menuSlice";

const links = [
  { link: "Home", section: "home" },
  { link: "About", section: "about" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(closeMenu());
  };

  return (
    <ul className="flex xl:flex-row lg:flex-col sm:flex-col sm:gap-3 gap-1 py-2 text-white font-body xl:relative lg:absolute sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl xl:bg-black sm:bg-cyan/30 backdrop-blur-lg lg:bg-cyan/30 sm:w-full">
      {links.map((item, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={item.section}
              activeClass="active-menu"
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500 relative block sm:px-4 sm:py-2"
              onClick={handleLinkClick}
            >
              {item.link}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;

//punya {link.link}
//absolute bottom-0 left-0 w-full h-[1px] bg-cyan transition-all duration-500 opacity-0 group-hover:opacity-100
