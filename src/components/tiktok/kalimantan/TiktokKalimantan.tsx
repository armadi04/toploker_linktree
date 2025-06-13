import React from "react";
import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa";

interface TiktokLink {
  name: string;
  link: string;
  username: string;
}

export const kalimantanLinks: TiktokLink[] = [
  {
    name: "Kalbar",
    username: "@lokerkalbar.top",
    link: "https://www.tiktok.com/@lokerkalbar.top",
  },
  {
    name: "Singkawang",
    username: "@lokersingkawang.top",
    link: "https://www.tiktok.com/@lokersingkawang.top",
  },
  {
    name: "Sekadau",
    username: "@infolokersekadau.top",
    link: "https://www.tiktok.com/@infolokersekadau.top",
  },
  {
    name: "Putussibau",
    username: "@lokerputussibau.top",
    link: "https://www.tiktok.com/@lokerputussibau.top",
  },
  {
    name: "Sambas",
    username: "@lokersambas.top",
    link: "https://www.tiktok.com/@lokersambas.top",
  },
  {
    name: "Mempawah",
    username: "@lokermempawah.top",
    link: "https://www.tiktok.com/@lokermempawah.top",
  },
  {
    name: "Melawi",
    username: "@lokermelwi.top",
    link: "https://www.tiktok.com/@lokermelwi.top",
  },
  {
    name: "Kayong Utara",
    username: "@lokerkayong.top",
    link: "https://www.tiktok.com/@lokerkayong.top",
  },
  {
    name: "Sanggau",
    username: "@lokersanggau.top",
    link: "https://www.tiktok.com/@lokersanggau.top",
  },
  {
    name: "Ketapang",
    username: "@lokerketapang.top",
    link: "https://www.tiktok.com/@lokerketapang.top",
  },
  {
    name: "Landak",
    username: "@lokerlandak.top",
    link: "https://www.tiktok.com/@lokerlandak.top",
  },
  {
    name: "Sintang",
    username: "@lokersintang.top",
    link: "https://www.tiktok.com/@lokersintang.top",
  },
  {
    name: "Pontianak",
    username: "@lokerpontianak.top",
    link: "https://www.tiktok.com/@lokerpontianak.top",
  },
  {
    name: "Bengkayang",
    username: "@lokerbengkayang.top",
    link: "https://www.tiktok.com/@lokerbengkayang.top",
  },
  {
    name: "Kalteng",
    username: "@lokerkalteng.top",
    link: "https://www.tiktok.com/@lokerkalteng.top",
  },
  {
    name: "Palangkaraya",
    username: "@lokerpalangkaraya.top",
    link: "https://www.tiktok.com/@lokerpalangkaraya.top",
  },
  {
    name: "Kapuas",
    username: "@lokerkapuas.top",
    link: "https://www.tiktok.com/@lokerkapuas.top",
  },
  {
    name: "Pangkalan Bun",
    username: "@lokerpangkalanbun.top",
    link: "https://www.tiktok.com/@lokerpangkalanbun.top",
  },
  {
    name: "Sampit",
    username: "@lokersampit.top",
    link: "https://www.tiktok.com/@lokersampit.top",
  },
  {
    name: "Kalimantan Utara",
    username: "@lokerkalimantanutara.top",
    link: "https://www.tiktok.com/@lokerkalimantanutara.top",
  },
  {
    name: "Tarakan",
    username: "@lokertarakan.top2",
    link: "https://www.tiktok.com/@lokertarakan.top2",
  },
  {
    name: "Kaltim",
    username: "@lokerkalimantantimur.top",
    link: "https://www.tiktok.com/@lokerkalimantantimur.top",
  },
  {
    name: "Balik Papan",
    username: "@lokerbalikpapan.top",
    link: "https://www.tiktok.com/@lokerbalikpapan.top",
  },
  {
    name: "Samarinda",
    username: "@lokersamarinda.top",
    link: "https://www.tiktok.com/@lokersamarinda.top",
  },
  {
    name: "Bontang",
    username: "@lokerbontang.top",
    link: "https://www.tiktok.com/@lokerbontang.top",
  },
  {
    name: "Berau",
    username: "@lokerrberau.top",
    link: "https://www.tiktok.com/@lokerrberau.top",
  },
  {
    name: "Kutai",
    username: "@lokersangatta.top",
    link: "https://www.tiktok.com/@lokersangatta.top",
  },
  {
    name: "Paser",
    username: "@lokerpaser.top",
    link: "https://www.tiktok.com/@lokerpaser.top",
  },
  {
    name: "Mahakam Ulu",
    username: "@lokermahakamulu.top",
    link: "https://www.tiktok.com/@lokermahakamulu.top",
  },
  {
    name: "Kalsel",
    username: "@lokerkalsel.top",
    link: "https://www.tiktok.com/@lokerkalsel.top",
  },
  {
    name: "Banjarbaru",
    username: "@lokerbanjarbaru.top",
    link: "https://www.tiktok.com/@lokerbanjarbaru.top",
  },
  {
    name: "Banjarmasin",
    username: "@lokerbanjarmasin.top",
    link: "https://www.tiktok.com/@lokerbanjarmasin.top",
  },
  {
    name: "Barabai",
    username: "@lokerbarabai.top",
    link: "https://www.tiktok.com/@lokerbarabai.top",
  },
  {
    name: "Kota Baru",
    username: "@lokerkotabaru.top",
    link: "https://www.tiktok.com/@lokerkotabaru.top",
  },
  {
    name: "Amuntai",
    username: "@lokeramuntai.top",
    link: "https://www.tiktok.com/@lokeramuntai.top",
  },
  {
    name: "Tabalong",
    username: "@lokertabalong.top",
    link: "https://www.tiktok.com/@lokertabalong.top",
  },
  {
    name: "Tanah Bumbu",
    username: "@lokertanahbumbu.top",
    link: "https://www.tiktok.com/@lokertanahbumbu.top",
  },
  {
    name: "Tanah Laut",
    username: "@lokertanahlaut.top",
    link: "https://www.tiktok.com/@lokertanahlaut.top",
  },
  {
    name: "Balangan",
    username: "@lokerbalangan.top",
    link: "https://www.tiktok.com/@lokerbalangan.top",
  },
];

const TiktokKalimantan = () => {
  return (
    <div className="relative min-h-screen w-full overflow-y-auto pb-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-4 py-8"
        >
          <img
            src="/images/tiktok.svg"
            alt="TikTok"
            className="w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all duration-300 object-cover mx-auto mb-6"
          />
          <h2 className="text-center font-bold text-xl md:text-2xl text-gray-300 mb-8">
            Berikut Link Akun TikTok Wilayah Kalimantan
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
              <FaTiktok className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-200 font-medium">{account.name}</h3>
                <p className="text-sm text-gray-400">{account.username}</p>
              </div>
              <FaTiktok className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TiktokKalimantan;
