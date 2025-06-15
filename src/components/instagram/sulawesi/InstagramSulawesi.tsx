import React from "react";
import { motion } from "framer-motion";
import { BiLogoInstagram } from "react-icons/bi";

interface InstagramLink {
  name: string;
  link: string;
  username: string;
}

export const sulawesiLinks: InstagramLink[] = [
  {
    name: "Sulawesi Selatan",
    username: "@lokersulsel.top",
    link: "https://instagram.com/lokersulsel.top",
  },
  {
    name: "Makassar",
    username: "@lokermakassar.top",
    link: "https://instagram.com/lokermakassar.top",
  },
  {
    name: "Luwu dan Palopo",
    username: "@lokerluwuraya.top",
    link: "https://instagram.com/lokerluwuraya.top",
  },
  {
    name: "Muna dan Bau-bau",
    username: "@lokermunabau.top",
    link: "https://instagram.com/lokermunabau.top",
  },
  {
    name: "Pare-pare",
    username: "@lokerparepare.top",
    link: "https://instagram.com/lokerparepare.top",
  },
  {
    name: "Wajo dan Bone",
    username: "@lokerwajobone.top",
    link: "https://instagram.com/lokerwajobone.top",
  },
  {
    name: "Sulawesi Tengah",
    username: "@lokersulteng.top",
    link: "https://instagram.com/lokersulteng.top",
  },
  {
    name: "Palu dan Luwuk",
    username: "@infolokerpaluwuk.top",
    link: "https://instagram.com/infolokerpaluwuk.top",
  },
  {
    name: "Mamuju",
    username: "@lokermamujuid.top",
    link: "https://instagram.com/lokermamujuid.top",
  },
  {
    name: "Sulawesi Tenggara",
    username: "@lokersultraid.top",
    link: "https://instagram.com/lokersultraid.top",
  },
  {
    name: "Kendari",
    username: "@lokerkendari.top",
    link: "https://instagram.com/lokerkendari.top",
  },
  {
    name: "Konawe",
    username: "@lokerkonawe.top",
    link: "https://instagram.com/lokerkonawe.top",
  },
  {
    name: "Sulawesi Utara",
    username: "@lokersulut.top",
    link: "https://instagram.com/lokersulut.top",
  },
  {
    name: "Gorontalo",
    username: "@infolokergorontalo.top",
    link: "https://instagram.com/infolokergorontalo.top",
  },
  {
    name: "Manado",
    username: "@lokermanado.top",
    link: "https://instagram.com/lokermanado.top",
  },
];

const InstagramSulawesi = () => {
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
            src="/images/instagram-logo.svg"
            alt="Instagram"
            className="w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all duration-300 object-cover mx-auto mb-6"
          />
          <h2 className="text-center font-bold text-xl md:text-2xl text-gray-300 mb-8">
            Berikut Link Akun Instagram Wilayah Sulawesi
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
    </div>
  );
};

export default InstagramSulawesi;
