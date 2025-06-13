import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

interface FacebookLink {
  name: string;
  link: string;
  username: string;
}

export const sumateraLinks: FacebookLink[] = [
  {
    name: "Sumatera Barat",
    username: "Info Loker Sumatera Barat",
    link: "https://www.facebook.com/groups/757682065232223",
  },
  {
    name: "Padang",
    username: "Info Loker Padang",
    link: "https://www.facebook.com/groups/703524477392861",
  },
  {
    name: "Bukittinggi",
    username: "Info Loker Bukittinggi",
    link: "https://www.facebook.com/groups/580493673414686",
  },
  {
    name: "Dharmasraya dan Solok",
    username: "Info Loker Dharmasraya dan Solok",
    link: "https://www.facebook.com/groups/350180200564518",
  },
  {
    name: "Payakumbuh",
    username: "Info Loker Payakumbuh",
    link: "https://www.facebook.com/groups/400506062116901",
  },
  {
    name: "Sumatera Selatan",
    username: "Info Loker Sumatera Selatan",
    link: "https://instagram.com/lokersumsel.top",
  },
  {
    name: "Palembang",
    username: "Info Loker Palembang",
    link: "https://www.facebook.com/groups/767133414279321",
  },
  {
    name: "Muara Enim dan Lahat",
    username: "Info Loker Muara Enim dan Lahat",
    link: "https://www.facebook.com/groups/1740328523011439",
  },
  {
    name: "Lampung",
    username: "Info Loker Lampung",
    link: "https://www.facebook.com/groups/1311420542679489",
  },
  {
    name: "Bandar Lampung",
    username: "Info Loker Bandar Lampung",
    link: "https://www.facebook.com/groups/726949595293161",
  },
  {
    name: "Metro Lampung",
    username: "Info Loker Metro Lampung",
    link: "https://www.facebook.com/groups/312355427771740",
  },
  {
    name: "Bengkulu",
    username: "Info Loker Bengkulu",
    link: "https://www.facebook.com/groups/402430018302028",
  },
  {
    name: "Bungo Bangko",
    username: "Info Loker Bungo Bangko",
    link: "https://www.facebook.com/groups/716890652859534",
  },
  {
    name: "Jambi",
    username: "Info Loker Jambi",
    link: "https://www.facebook.com/groups/770331627461572",
  },
  {
    name: "Sumatera Utara",
    username: "Info Loker Sumatera Utara",
    link: "https://www.facebook.com/groups/1004251290458489",
  },
  {
    name: "Medan",
    username: "Info Loker Medan",
    link: "https://www.facebook.com/groups/1417127262137662",
  },
  {
    name: "Labuhan Batu",
    username: "Info Loker Labuhan Batu",
    link: "https://www.facebook.com/groups/745682933449851",
  },
  {
    name: "Aceh",
    username: "Info Loker Aceh",
    link: "https://www.facebook.com/groups/749163759445915",
  },
  {
    name: "Banda Aceh",
    username: "Info Loker Banda Aceh",
    link: "https://www.facebook.com/groups/985550516055035",
  },
];

const FacebookSumatera = () => {
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
            src="/images/facebook.svg"
            alt="Facebook"
            className="w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all duration-300 object-cover mx-auto mb-6"
          />
          <h2 className="text-center font-bold text-xl md:text-2xl text-gray-300 mb-8">
            Berikut Link Akun Facebook Wilayah Sumatera
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mx-auto"
        >
          {sumateraLinks.map((account, index) => (
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

export default FacebookSumatera;
