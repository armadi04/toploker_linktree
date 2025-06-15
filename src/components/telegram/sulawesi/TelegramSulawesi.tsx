import React from "react";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

interface TelegramLink {
  name: string;
  link: string;
  username: string;
}

export const sulawesiLinks: TelegramLink[] = [
  {
    name: "Sulawesi Selatan",
    username: "@lokersulseltop",
    link: "https://t.me/lokersulseltop",
  },
  {
    name: "Makassar",
    username: "@lokermakassartop",
    link: "https://t.me/lokermakassartop",
  },
  {
    name: "Luwu dan Palopo",
    username: "@lokerluwurayatop",
    link: "https://t.me/lokerluwurayatop",
  },
  {
    name: "Muna dan Bau-bau",
    username: "@lokermunabautop",
    link: "https://t.me/lokermunabautop",
  },
  {
    name: "Pare-pare",
    username: "@lokerpareparetop",
    link: "https://t.me/lokerpareparetop",
  },
  {
    name: "Wajo dan Bone",
    username: "@lokerwajobonetop",
    link: "https://t.me/lokerwajobonetop",
  },
  {
    name: "Sulawesi Tengah",
    username: "@lokersultengtop",
    link: "https://t.me/lokersultengtop",
  },
  {
    name: "Palu dan Luwuk",
    username: "@lokerpaluuwuktop",
    link: "https://t.me/lokerpaluuwuktop",
  },
  {
    name: "Sulawesi Utara",
    username: "@lokersuluttop",
    link: "https://t.me/lokersuluttop",
  },
  {
    name: "Kendari",
    username: "@lokerkendaritop",
    link: "https://t.me/lokerkendaritop",
  },
  {
    name: "Konawe",
    username: "@lokerkonawetop",
    link: "https://t.me/lokerkonawetop",
  },
  {
    name: "Sulawesi Tenggara",
    username: "@lokersultratop",
    link: "https://t.me/lokersultratop",
  },
  {
    name: "Gorontalo",
    username: "@lokergorontalotop",
    link: "https://t.me/lokergorontalotop",
  },
  {
    name: "Manado",
    username: "@lokermanadotop",
    link: "https://t.me/lokermanadotop",
  },
];

const TelegramSulawesi = () => {
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
            Berikut Link Akun Telegram Wilayah Sulawesi
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mx-auto"
        >
          {sulawesiLinks.map((account, index) => (
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

export default TelegramSulawesi;
