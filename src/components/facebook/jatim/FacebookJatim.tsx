import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

interface FacebookLink {
  name: string;
  link: string;
  username: string;
}

export const jatimLinks: FacebookLink[] = [
  {
    name: "Banyuwangi",
    username: "Info Loker Banyuwangi",
    link: "https://www.facebook.com/groups/510425007422933",
  },
  {
    name: "Bojonegoro",
    username: "Info Loker Bojonegoro",
    link: "https://www.facebook.com/groups/682977329576535",
  },
  {
    name: "Gresik",
    username: "Info Loker Gresik",
    link: "https://www.facebook.com/groups/1333728480481132",
  },
  {
    name: "Jember",
    username: "Info Loker Jember",
    link: "https://www.facebook.com/groups/573967620591483",
  },
  {
    name: "Jombang",
    username: "Info Loker Jombang",
    link: "https://www.facebook.com/groups/565234694929410",
  },
  {
    name: "Kediri",
    username: "Info Loker Kediri",
    link: "https://www.facebook.com/groups/2821858688107768",
  },
  {
    name: "Lamongan",
    username: "Info Loker Lamongan",
    link: "https://www.facebook.com/groups/1995123600688658",
  },
  {
    name: "Lumajang",
    username: "Info Loker Lumajang",
    link: "https://www.facebook.com/groups/1106941656554982",
  },
  {
    name: "Madiun",
    username: "Info Loker Madiun",
    link: "https://www.facebook.com/groups/431201175011249",
  },
  {
    name: "Mojokerto",
    username: "Info Loker Mojokerto",
    link: "https://www.facebook.com/groups/539182917827106",
  },
  {
    name: "Nganjuk",
    username: "Info Loker Nganjuk",
    link: "https://www.facebook.com/groups/697624941488460",
  },
  {
    name: "Pasuruan",
    username: "Info Loker Pasuruan",
    link: "https://www.facebook.com/groups/397790325545009",
  },
  {
    name: "Ponorogo",
    username: "Info Loker Ponorogo",
    link: "https://www.facebook.com/groups/1072409127023823",
  },
  {
    name: "Probolinggo",
    username: "Info Loker Probolinggo",
    link: "https://www.facebook.com/groups/2147751465400253",
  },
  {
    name: "Sidoarjo",
    username: "Info Loker Sidoarjo",
    link: "https://www.facebook.com/groups/535783008121620",
  },
  {
    name: "Tuban",
    username: "Info Loker Tuban",
    link: "https://www.facebook.com/groups/684893859466777",
  },
  {
    name: "Madura",
    username: "Info Loker Madura",
    link: "https://www.facebook.com/groups/4660119914092775",
  },
  {
    name: "Magetan Ngawi",
    username: "Info Loker Magetan Ngawi",
    link: "https://www.facebook.com/groups/3251220721814708",
  },
  {
    name: "Situbondo",
    username: "Info Loker Situbondo",
    link: "https://www.facebook.com/groups/3031484427165705",
  },
  {
    name: "Trenggalek Pacitan",
    username: "Info Loker Trenggalek Pacitan",
    link: "https://www.facebook.com/groups/3227041237511175",
  },
  {
    name: "Batu Malang",
    username: "Info Loker Batu Malang",
    link: "https://www.facebook.com/groups/756016895773661",
  },
  {
    name: "Blitar Tulungagung",
    username: "Info Loker Blitar Tulungagung",
    link: "https://www.facebook.com/groups/344648304320410",
  },
  {
    name: "Surabaya",
    username: "Info Loker Surabaya",
    link: "https://www.facebook.com/share/g/1AD5vdpZ6i/",
  },
];

const FacebookJatim = () => {
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
            Berikut Link Akun Facebook Provinsi Jawa Timur
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mx-auto"
        >
          {jatimLinks.map((account, index) => (
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

export default FacebookJatim;
