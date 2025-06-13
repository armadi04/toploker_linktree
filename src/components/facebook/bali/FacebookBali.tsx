import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

interface FacebookLink {
  name: string;
  link: string;
  username: string;
}

export const facebookLinks: FacebookLink[] = [
  {
    name: "Bali",
    username: "Info Loker Bali",
    link: "https://www.facebook.com/groups/532732278528889",
  },
  {
    name: "Badung",
    username: "Info Loker Badung",
    link: "https://www.facebook.com/groups/547521863396600",
  },
  {
    name: "Denpasar",
    username: "Info Loker Denpasar",
    link: "https://www.facebook.com/groups/1346170855851921",
  },
  {
    name: "Buleleng",
    username: "Info Loker Buleleng",
    link: "https://www.facebook.com/groups/3248595055420310",
  },
  {
    name: "Gianyar",
    username: "Info Loker Gianyar",
    link: "https://www.facebook.com/groups/458544479367499",
  },
  {
    name: "Tabanan",
    username: "Info Loker Tabanan",
    link: "https://www.facebook.com/groups/705288420785176",
  },
  {
    name: "Karangasem",
    username: "Info Loker Karangasem",
    link: "https://www.facebook.com/groups/5075088109254835",
  },
  {
    name: "Jembrana",
    username: "Info Loker Jembrana",
    link: "https://www.facebook.com/groups/1685213568510498",
  },
];

const FacebookBali = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-4 py-8"
        >
          <img
            src="/images/facebook.svg"
            alt="Facebook"
            className="w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all duration-300 object-cover mx-auto mb-6"
          />
          <h2 className="text-center font-bold text-xl text-gray-300">
            Berikut Link Akun Facebook Provinsi Bali
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-4 items-center justify-center"
        >
          {facebookLinks.map((account, index) => (
            <a
              key={index}
              href={account.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-gray-700 transition-all duration-300 group"
            >
              <FaFacebook className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-200 font-medium">{account.name}</h3>
                <p className="text-sm text-gray-400">{account.username}</p>
              </div>
              <FaFacebook className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FacebookBali;
