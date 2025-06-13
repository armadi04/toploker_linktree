import React from "react";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

interface TelegramLink {
  name: string;
  link: string;
  username: string;
}

export const kalimantanLinks: TelegramLink[] = [
  {
    name: "Kalbar",
    username: "@lokerkalbartop",
    link: "https://t.me/lokerkalbartop",
  },
  {
    name: "Singkawang",
    username: "@lokersingkawangtop",
    link: "https://t.me/lokersingkawangtop",
  },
  {
    name: "Sekadau",
    username: "@lokersekadautop",
    link: "https://t.me/lokersekadautop",
  },
  {
    name: "Putussibau",
    username: "@lokerputussibautop",
    link: "https://t.me/lokerputussibautop",
  },
  {
    name: "Sambas",
    username: "@lokersambastop",
    link: "https://t.me/lokersambastop",
  },
  {
    name: "Mempawah",
    username: "@lokermempawahtop",
    link: "https://t.me/lokermempawahtop",
  },
  {
    name: "Melawi Pinoh",
    username: "@lokermelawipinohtop",
    link: "https://t.me/lokermelawipinohtop",
  },
  {
    name: "Kayong Utara",
    username: "@lokerkayongutaratop",
    link: "https://t.me/lokerkayongutaratop",
  },
  {
    name: "Sanggau",
    username: "@lokersanggautop",
    link: "https://t.me/lokersanggautop",
  },
  {
    name: "Ketapang",
    username: "@lokerketapangtop",
    link: "https://t.me/lokerketapangtop",
  },
  {
    name: "Landak",
    username: "@lokerlandaktop",
    link: "https://t.me/lokerlandaktop",
  },
  {
    name: "Sintang",
    username: "@lokersintangtop",
    link: "https://t.me/lokersintangtop",
  },
  {
    name: "Pontianak",
    username: "@lokerpontianaktop",
    link: "https://t.me/lokerpontianaktop",
  },
  {
    name: "Bengkayang",
    username: "@lokerbengkayangtop",
    link: "https://t.me/lokerbengkayangtop",
  },
  {
    name: "Kalteng",
    username: "@lokerkalimantantengahtop",
    link: "https://t.me/lokerkalimantantengahtop",
  },
  {
    name: "Palangkaraya",
    username: "@lokerpalangkarayatop",
    link: "https://t.me/lokerpalangkarayatop",
  },
  {
    name: "Kapuas",
    username: "@lokerkapuas",
    link: "https://t.me/lokerkapuas",
  },
  {
    name: "Pangkalan Bun",
    username: "@lokerpbuntop",
    link: "https://t.me/lokerpbuntop",
  },
  {
    name: "Sampit",
    username: "@lokersampittop",
    link: "https://t.me/lokersampittop",
  },
  {
    name: "Kalimantan Utara",
    username: "@lokerkaltaratop",
    link: "https://t.me/lokerkaltaratop",
  },
  {
    name: "Kaltim",
    username: "@lokerkaltimtop",
    link: "https://t.me/lokerkaltimtop",
  },
  {
    name: "Balik Papan",
    username: "@lokerbalikpapantop",
    link: "https://t.me/lokerbalikpapantop",
  },
  {
    name: "Kutai",
    username: "@lokerkutaitop",
    link: "https://t.me/lokerkutaitop",
  },
  {
    name: "Samarinda",
    username: "@lokersamarindatop",
    link: "https://t.me/lokersamarindatop",
  },
  {
    name: "Bontang",
    username: "@lokerbontangtop",
    link: "https://t.me/lokerbontangtop",
  },
  {
    name: "Berau",
    username: "@lokerberautop",
    link: "https://t.me/lokerberautop",
  },
  {
    name: "Paser",
    username: "@lokerpasertop",
    link: "https://t.me/lokerpasertop",
  },
  {
    name: "Mahakam Ulu",
    username: "@lokermahakamulutop",
    link: "https://t.me/lokermahakamulutop",
  },
  {
    name: "Kalsel",
    username: "@lokerkalimantanselatantop",
    link: "https://t.me/lokerkalimantanselatantop",
  },
  {
    name: "Banjarbaru",
    username: "@lokerbanjarbarutop",
    link: "https://t.me/lokerbanjarbarutop",
  },
  {
    name: "Banjarmasin",
    username: "@lokerbanjarmasintop",
    link: "https://t.me/lokerbanjarmasintop",
  },
  {
    name: "Barabai",
    username: "@lokerbarabaitop",
    link: "https://t.me/lokerbarabaitop",
  },
  {
    name: "Kota Baru",
    username: "@lokerkotabarutop",
    link: "https://t.me/lokerkotabarutop",
  },
  {
    name: "Amuntai",
    username: "@lokeramuntaitop",
    link: "https://t.me/lokeramuntaitop",
  },
  {
    name: "Tabalong",
    username: "@lokertabalong",
    link: "https://t.me/lokertabalong",
  },
  {
    name: "Tanah Bumbu",
    username: "@lokertanahbumbutop",
    link: "https://t.me/lokertanahbumbutop",
  },
  {
    name: "Tanah Laut",
    username: "@lokertalatop",
    link: "https://t.me/lokertalatop",
  },
  {
    name: "Balangan",
    username: "@lokerbalangantop",
    link: "https://t.me/lokerbalangantop",
  },
];

const TelegramKalimantan = () => {
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
            src="/images/telegram.svg"
            alt="Telegram"
            className="w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all duration-300 object-cover mx-auto mb-6"
          />
          <h2 className="text-center font-bold text-xl md:text-2xl text-gray-300 mb-8">
            Berikut Link Akun Telegram Wilayah Kalimantan
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
              <FaTelegram className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-200 font-medium">{account.name}</h3>
                <p className="text-sm text-gray-400">{account.username}</p>
              </div>
              <FaTelegram className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TelegramKalimantan;
