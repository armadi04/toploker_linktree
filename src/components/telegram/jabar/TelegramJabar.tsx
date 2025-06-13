import React from "react";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

interface TelegramLink {
  name: string;
  link: string;
  username: string;
}

export const jabarLinks: TelegramLink[] = [
  {
    name: "Jakarta",
    username: "@lokerjakartatop",
    link: "https://t.me/lokerjakartatop",
  },
  {
    name: "Bogor",
    username: "@lokerbogortop",
    link: "https://t.me/lokerbogortop",
  },
  {
    name: "Bandung",
    username: "@lokerbandungtop",
    link: "https://t.me/lokerbandungtop",
  },
  {
    name: "Bekasi",
    username: "@lokerbekasitop",
    link: "https://t.me/lokerbekasitop",
  },
  {
    name: "Depok",
    username: "@lokerdepoktop",
    link: "https://t.me/lokerdepoktop",
  },
  {
    name: "Garut",
    username: "@lokergaruttop",
    link: "https://t.me/lokergaruttop",
  },
  {
    name: "Sukabumi",
    username: "@lokersukabumitop",
    link: "https://t.me/lokersukabumitop",
  },
  {
    name: "Karawang",
    username: "@lokerkarawangtop",
    link: "https://t.me/lokerkarawangtop",
  },
  {
    name: "Cianjur",
    username: "@lokercianjurtop",
    link: "https://t.me/lokercianjurtop",
  },
  {
    name: "Cirebon",
    username: "@lokercirebontop",
    link: "https://t.me/lokercirebontop",
  },
  {
    name: "Sumedang",
    username: "@lokersumedangtop",
    link: "https://t.me/lokersumedangtop",
  },
  {
    name: "Subang",
    username: "@lokersubangtop",
    link: "https://t.me/lokersubangtop",
  },
  {
    name: "Purwakarta",
    username: "@lokerpurwakartatop",
    link: "https://t.me/lokerpurwakartatop",
  },
  {
    name: "Majalengka",
    username: "@lokermajalengkatop",
    link: "https://t.me/lokermajalengkatop",
  },
  {
    name: "Ciamis",
    username: "@lokerciamistop",
    link: "https://t.me/lokerciamistop",
  },
  {
    name: "Indramayu",
    username: "@lokerindramayutop",
    link: "https://t.me/lokerindramayutop",
  },
  {
    name: "Kuningan",
    username: "@lokerkuningantop",
    link: "https://t.me/lokerkuningantop",
  },
  {
    name: "Cimahi",
    username: "@lokercimahitop",
    link: "https://t.me/lokercimahitop",
  },
  {
    name: "Tasikmalaya",
    username: "@lokertasikmalayatop",
    link: "https://t.me/lokertasikmalayatop",
  },
  {
    name: "Tangerang",
    username: "@lokertangerangtop",
    link: "https://t.me/lokertangerangtop",
  },
  {
    name: "Cilegon",
    username: "@lokercilegontop",
    link: "https://t.me/lokercilegontop",
  },
  {
    name: "Serang",
    username: "@lokerserangtop",
    link: "https://t.me/lokerserangtop",
  },
  {
    name: "Banten",
    username: "@lokerbantentop",
    link: "https://t.me/lokerbantentop",
  },
  {
    name: "Pangandaran",
    username: "@lokerpangandarantop",
    link: "https://t.me/lokerpangandarantop",
  },
];

const TelegramJabar = () => {
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
            Berikut Link Akun Telegram Provinsi Jawa Barat
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mx-auto"
        >
          {jabarLinks.map((account, index) => (
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

export default TelegramJabar;
