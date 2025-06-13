import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiLogoInstagram } from "react-icons/bi";
import { ChevronUp } from "lucide-react";

interface InstagramLink {
  name: string;
  link: string;
  username: string;
}

export const kalimantanLinks: InstagramLink[] = [
  {
    name: "Kalimantan Barat",
    username: "@lokerkalbar.top",
    link: "https://instagram.com/lokerkalbar.top",
  },
  {
    name: "Singkawang",
    username: "@lokersingkawang.top",
    link: "https://instagram.com/lokersingkawang.top",
  },
  {
    name: "Sekadau",
    username: "@lokersekadau.top",
    link: "https://instagram.com/lokersekadau.top",
  },
  {
    name: "Putussibau",
    username: "@lokerputussibau.top",
    link: "https://instagram.com/lokerputussibau.top",
  },
  {
    name: "Sambas",
    username: "@lokersambas.top",
    link: "https://instagram.com/lokersambas.top",
  },
  {
    name: "Mempawah",
    username: "@lokermempawah.top",
    link: "https://instagram.com/lokermempawah.top",
  },
  {
    name: "Melawi",
    username: "@lokermelawipinoh.top",
    link: "https://instagram.com/lokermelawipinoh.top",
  },
  {
    name: "Kayong Utara",
    username: "@lokerkayongutara.top",
    link: "https://instagram.com/lokerkayongutara.top",
  },
  {
    name: "Sanggau",
    username: "@lokersanggau.top",
    link: "https://instagram.com/lokersanggau.top",
  },
  {
    name: "Ketapang",
    username: "@lokerketapang.top",
    link: "https://instagram.com/lokerketapang.top",
  },
  {
    name: "Landak",
    username: "@lokerlandak.top",
    link: "https://instagram.com/lokerlandak.top",
  },
  {
    name: "Sintang",
    username: "@lokersintang.top",
    link: "https://instagram.com/lokersintang.top",
  },
  {
    name: "Pontianak",
    username: "@lokerpontianak.top",
    link: "https://instagram.com/lokerpontianak.top",
  },
  {
    name: "Bengkayang",
    username: "@lokerbengkayang.top",
    link: "https://instagram.com/lokerbengkayang.top",
  },
  {
    name: "Kalteng",
    username: "@lokerkalteng.top",
    link: "https://instagram.com/lokerkalteng.top",
  },
  {
    name: "Palangkaraya",
    username: "@lokerpalangkarayaid.top",
    link: "https://www.instagram.com/lokerpalangkarayaid.top/",
  },
  {
    name: "Kapuas",
    username: "@lokerkapuas.top",
    link: "https://instagram.com/lokerkapuas.top",
  },
  {
    name: "Pangkalan Bun",
    username: "@lokerpbun.top",
    link: "https://instagram.com/lokerpbun.top",
  },
  {
    name: "Sampit",
    username: "@lokersampit.top",
    link: "https://instagram.com/lokersampit.top",
  },
  {
    name: "Kalimantan Utara",
    username: "@lokerkaltara.top",
    link: "https://instagram.com/lokerkaltara.top",
  },
  {
    name: "Tarakan",
    username: "@lokertarakan.top",
    link: "https://instagram.com/lokertarakan.top",
  },
  {
    name: "Kaltim",
    username: "@lokerkaltim.top",
    link: "https://instagram.com/lokerkaltim.top",
  },
  {
    name: "Balik Papan",
    username: "@lokerbalikpapan.top",
    link: "https://instagram.com/lokerbalikpapan.top",
  },
  {
    name: "Samarinda",
    username: "@lokersamarinda.top",
    link: "https://instagram.com/lokersamarinda.top",
  },
  {
    name: "Bontang",
    username: "@lokerbontang.top",
    link: "https://instagram.com/lokerbontang.top",
  },
  {
    name: "Berau",
    username: "@lokerberau.top",
    link: "https://instagram.com/lokerberau.top",
  },
  {
    name: "Kutai",
    username: "@lokersangatta.top",
    link: "https://instagram.com/lokersangatta.top",
  },
  {
    name: "Paser",
    username: "@lokerpaserid.top",
    link: "https://instagram.com/lokerpaserid.top",
  },
  {
    name: "Mahakam Ulu",
    username: "@lokermahakamulu.top",
    link: "https://instagram.com/lokermahakamulu.top",
  },
  {
    name: "Kalsel",
    username: "@lokerkalimantanselatan.top",
    link: "https://instagram.com/lokerkalimantanselatan.top",
  },
  {
    name: "Banjarbaru",
    username: "@lokerbanjarbaru.top",
    link: "https://instagram.com/lokerbanjarbaru.top",
  },
  {
    name: "Banjarmasin",
    username: "@lokerbanjarmasin.top",
    link: "https://instagram.com/lokerbanjarmasin.top",
  },
  {
    name: "Barabai",
    username: "@lokerbarabai.top",
    link: "https://instagram.com/lokerbarabai.top",
  },
  {
    name: "Kota Baru",
    username: "@lokerkotabaru.top.id",
    link: "https://instagram.com/lokerkotabaru.top.id",
  },
  {
    name: "Amuntai",
    username: "@lokeramuntai.top",
    link: "https://instagram.com/lokeramuntai.top",
  },
  {
    name: "Tabalong",
    username: "@lokertabalong.top",
    link: "https://instagram.com/lokertabalong.top",
  },
  {
    name: "Tanah Bumbu",
    username: "@lokertanahbumbu.top",
    link: "https://instagram.com/lokertanahbumbu.top",
  },
  {
    name: "Tanah Laut",
    username: "@lokertala.top",
    link: "https://instagram.com/lokertala.top",
  },
  {
    name: "Balangan",
    username: "@lokerbalangan.top",
    link: "https://instagram.com/lokerbalangan.top",
  },
];

const InstagramKalimantan = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const goToTop = () => {
    try {
      window.location.href = "#top";
    } catch (error) {
      try {
        const element = document.getElementById("top");
        element?.scrollIntoView({ behavior: "auto", block: "start" });
      } catch (error) {
        try {
          window.scroll(0, 0);
        } catch (error) {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full pb-20">
      <div id="top" style={{ position: "absolute", top: 0 }}></div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-4 py-8"
        >
          <img
            src="/images/instagram-logo.svg"
            alt="Instagram"
            className="w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all duration-300 object-cover mx-auto mb-6"
          />
          <h2 className="text-center font-bold text-xl md:text-2xl text-gray-300 mb-8">
            Berikut Link Akun Instagram Wilayah Kalimantan
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mx-auto"
        >
          {kalimantanLinks.map((account, index) => (
            <a
              key={index}
              href={account.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-gray-700 transition-all duration-300 group"
            >
              <BiLogoInstagram className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-200 font-medium">{account.name}</h3>
                <p className="text-sm text-gray-400">{account.username}</p>
              </div>
              <BiLogoInstagram className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          ))}
        </motion.div>
      </div>

      <div className="fixed bottom-6 right-6" style={{ zIndex: 9999 }}>
        {/* Custom Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-2 bg-gray-800 text-white px-3 py-1.5 text-sm rounded-md transition-opacity duration-200 shadow-lg ${
            showTooltip
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1"
          }`}
          style={{
            transform: "translateX(-25%)",
            minWidth: "max-content",
          }}
        >
          Kembali ke atas
        </div>

        {/* Button */}
        <button
          onClick={goToTop}
          type="button"
          onTouchStart={goToTop}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onKeyDown={(e) => e.key === "Enter" && goToTop()}
          className="bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 text-white p-3 rounded-full shadow-lg cursor-pointer select-none focus:outline-none"
          style={{
            WebkitTapHighlightColor: "transparent",
            touchAction: "manipulation",
          }}
          aria-label="Kembali ke atas"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default InstagramKalimantan;
