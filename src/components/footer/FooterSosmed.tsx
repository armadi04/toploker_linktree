import { useState, useEffect } from "react";

const FooterSosmed = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col text-center items-center justify-center w-full lg:px-0 lg:py-2">
      <div className="w-full h-[1px] bg-gray-300 mt-24"></div>
      <div className="flex flex-col w-full max-md:items-center max-md:justify-center lg:flex-row lg:justify-between lg:items-start pt-1">
        <div className="flex items-center font-bold p-4 max-md:mb-0 md:ml-4 lg:p-0 lg:self-start">
          <p className="text-2xl text-primary">
            <span className="text-[#f26522]">Top</span>
            <span className="text-[#4f2ca9]">Loker.com</span>
          </p>
        </div>
        <div className="flex flex-col items-center max-md:mt-0 md:mr-4 lg:items-end mt-4 lg:mt-0 lg:self-end">
          <ul className="flex flex-wrap justify-center items-center max-md:mt-0 lg:gap-0 sm:gap-2 text-gray-300 text-sm">
            {/* ...footerLinks mapping... */}
          </ul>
          <p className="text-xs text-gray-300 mt-4 mb-2 max-md:mt-0 lg:mt-0">
            © 2025 TopLoker.com | All Rights Reserved.
          </p>
        </div>
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default FooterSosmed;
