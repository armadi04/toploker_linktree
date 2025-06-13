import React from "react";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

interface TelegramLink {
  name: string;
  link: string;
  username: string;
}

export const jatengLinks: TelegramLink[] = [
  {
    name: "Klaten",
    username: "@lokerklatentop",
    link: "https://t.me/lokerklatentop",
  },
  {
    name: "Sragen",
    username: "@lokersragentop",
    link: "https://t.me/lokersragentop",
  },
  {
    name: "Purwodadi Grobogan",
    username: "@lokerpurwodadigrobogantop",
    link: "https://t.me/lokerpurwodadigrobogantop",
  },
  {
    name: "Pati Rembang",
    username: "@lokerpatirembangtop",
    link: "https://t.me/lokerpatirembangtop",
  },
  {
    name: "Demak Semarang",
    username: "@lokerdemaksemarangtop",
    link: "https://t.me/lokerdemaksemarangtop",
  },
  {
    name: "Jepara",
    username: "@lokerjeparatop",
    link: "https://t.me/lokerjeparatop",
  },
  {
    name: "Kendal",
    username: "@lokerkendaltop",
    link: "https://t.me/lokerkendaltop",
  },
  {
    name: "Batang Pekalongan",
    username: "@lokerbatangpekalongantop",
    link: "https://t.me/lokerbatangpekalongantop",
  },
  {
    name: "Boyolali",
    username: "@lokerboyolalitop",
    link: "https://t.me/lokerboyolalitop",
  },
  {
    name: "Ungaran Semarang",
    username: "@lokerungarantop",
    link: "https://t.me/lokerungarantop",
  },
  {
    name: "Cilacap",
    username: "@lokercilacaptop",
    link: "https://t.me/lokercilacaptop",
  },
  {
    name: "Purwokerto",
    username: "@lokerpurwokertotop",
    link: "https://t.me/lokerpurwokertotop",
  },
  {
    name: "Banjarnegara",
    username: "@lokerbanjarnegaratop",
    link: "https://t.me/lokerbanjarnegaratop",
  },
  {
    name: "Purworejo",
    username: "@lokerpurworejotop",
    link: "https://t.me/lokerpurworejotop",
  },
  {
    name: "Magelang",
    username: "@lokermagelangtop",
    link: "https://t.me/lokermagelangtop",
  },
  {
    name: "Sukoharjo",
    username: "@lokersukoharjotop",
    link: "https://t.me/lokersukoharjotop",
  },
  {
    name: "Karanganyar",
    username: "@lokerkaranganyartop",
    link: "https://t.me/lokerkaranganyartop",
  },
  {
    name: "Kudus",
    username: "@lokerkudustop",
    link: "https://t.me/lokerkudustop",
  },
  {
    name: "Pemalang",
    username: "@lokerpemalangtop",
    link: "https://t.me/lokerpemalangtop",
  },
  {
    name: "Temanggung Wonosobo",
    username: "@lokertemanggungwonosobotop",
    link: "https://t.me/lokertemanggungwonosobotop",
  },
  {
    name: "Brebes Tegal",
    username: "@lokerbrebestegaltop",
    link: "https://t.me/lokerbrebestegaltop",
  },
  {
    name: "Purbalingga",
    username: "@lokerpurbalinggatop",
    link: "https://t.me/lokerpurbalinggatop",
  },
  {
    name: "Wonogiri",
    username: "@lokerwonogiritop",
    link: "https://t.me/lokerwonogiritop",
  },
  {
    name: "Salatiga",
    username: "@lokersalatigatop",
    link: "https://t.me/lokersalatigatop",
  },
  {
    name: "Semarang",
    username: "@lokersemarangtop",
    link: "https://t.me/lokersemarangtop",
  },
  {
    name: "Solo",
    username: "@lokersolotop",
    link: "https://t.me/lokersolotop",
  },
  {
    name: "Kebumen",
    username: "@lokerkebumentop",
    link: "https://t.me/lokerkebumentop",
  },
  {
    name: "Blora",
    username: "@lokerbloratop",
    link: "https://t.me/lokerbloratop",
  },
  {
    name: "Jogja",
    username: "@lokerjogjatop",
    link: "https://t.me/lokerjogjatop",
  },
  {
    name: "Sleman",
    username: "@lokerslemantop",
    link: "https://t.me/lokerslemantop",
  },
  {
    name: "Kulon Progo",
    username: "@lokerkulonprogotop",
    link: "https://t.me/lokerkulonprogotop",
  },
];

const TelegramJateng = () => {
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
            Berikut Link Akun Telegram Provinsi Jawa Tengah
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mx-auto"
        >
          {jatengLinks.map((account, index) => (
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

export default TelegramJateng;
