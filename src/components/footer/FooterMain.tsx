import { Link, useLocation } from "react-router-dom";

interface FooterLink {
  name: string;
  section: string;
}

const footerLinks: FooterLink[] = [
  {
    name: "Instagram",
    section: "instagram",
  },
  {
    name: "Facebook",
    section: "facebook",
  },
  {
    name: "Telegram",
    section: "telegram",
  },
  {
    name: "Tiktok",
    section: "tiktok",
  },
  {
    name: "Youtube",
    section: "youtube",
  },
  {
    name: "WhatsApp",
    section: "whatsapp",
  },
];

const FooterMain = () => {
  const location = useLocation();

  const handleNavigation = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (sectionId: string) => {
    return location.pathname.includes(sectionId);
  };

  return (
    <div className="flex flex-col text-center items-center justify-center w-full max-w-full mx-auto lg:px-0 lg:py-2">
      <div className="w-full h-[1px] bg-gray-300 mt-24"></div>
      <div className="flex flex-col w-full max-lg:items-center max-lg:justify-center lg:flex-row lg:justify-between lg:items-start pt-1">
        <div className="lg:self-start flex items-center p-4 font-bold lg:p-0 lg:ml-2 lg:mt-3">
          <p className="text-2xl text-primary">
            <span className="text-[#f26522]">Top</span>
            <span className="text-[#4f2ca9]">Loker.com</span>
          </p>
        </div>
        <div className="flex flex-col items-center max-md:mt-0 lg:items-end mt-4 lg:mt-0 lg:self-end">
          <ul className="flex flex-wrap justify-center items-center lg:gap-0 sm:gap-2 text-gray-300 text-sm">
            {footerLinks.map((item: FooterLink, index: number) => {
              return (
                <li key={index} className="sm:flex-shrink-0">
                  <Link
                    to={`#${item.section}`}
                    onClick={(e) => handleNavigation(e, item.section)}
                    className={`font-semibold mb-2 transition-all duration-500 cursor-pointer inline-block px-4 py-2 rounded-md ${
                      isActive(item.section)
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "hover:bg-gray-900 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-xs text-gray-300 mt-4 mb-1 max-md:mt-0 lg:mt-0 lg:mr-2">
            © 2025 TopLoker.com | All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;

//p akhir
//max-w-[1200px]  max-md:flex max-md:text-center max-md:justify-center max-md:items-center max-md:mt-11
