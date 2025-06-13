import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

interface FacebookLink {
  name: string;
  link: string;
  username: string;
}

export const sulawesiLinks: FacebookLink[] = [
  {
    name: "Sulawesi Selatan",
    username: "Info Loker Sulawesi Selatan",
    link: "https://www.facebook.com/groups/689239005472790",
  },
  {
    name: "Makassar",
    username: "Info Loker Makassar",
    link: "https://www.facebook.com/groups/331952652276457",
  },
  {
    name: "Luwu dan Palopo",
    username: "Info Loker Luwu dan Palopo",
    link: "https://www.facebook.com/groups/414163350610759",
  },
  {
    name: "Muna dan Bau-bau",
    username: "Info Loker Muna dan Bau-bau",
    link: "https://www.facebook.com/groups/434333098194463",
  },
  {
    name: "Pare-pare",
    username: "Info Loker Pare-pare",
    link: "https://www.facebook.com/groups/351040407153175",
  },
  {
    name: "Wajo dan Bone",
    username: "Info Loker Wajo dan Bone",
    link: "https://www.facebook.com/groups/5184123481656599",
  },
  {
    name: "Sulawesi Tengah",
    username: "Info Loker Sulawesi Tengah",
    link: "https://www.facebook.com/groups/1182521172538508",
  },
  {
    name: "Palu dan Luwuk",
    username: "Info Loker Palu dan Luwuk",
    link: "https://www.facebook.com/groups/2917582971872082",
  },
  {
    name: "Mamuju",
    username: "Info Loker Mamuju",
    link: "https://www.facebook.com/groups/697165224922557",
  },
  {
    name: "Sulawesi Tenggara",
    username: "Info Loker Sulawesi Tenggara",
    link: "https://www.facebook.com/groups/739605227385955",
  },
  {
    name: "Kendari",
    username: "Info Loker Kendari",
    link: "https://www.facebook.com/groups/744274363431630",
  },
  {
    name: "Konawe",
    username: "Info Loker Konawe",
    link: "https://www.facebook.com/share/g/15xStNvf5w/",
  },
  {
    name: "Sulawesi Utara",
    username: "Info Loker Sulawesi Utara",
    link: "https://www.facebook.com/groups/357371839814538",
  },
  {
    name: "Gorontalo",
    username: "Info Loker Gorontalo",
    link: "https://www.facebook.com/groups/1071786896879800",
  },
  {
    name: "Manado",
    username: "Info Loker Manado",
    link: "https://www.facebook.com/groups/1019519708768511",
  },
];

const FacebookSulawesi = () => {
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
            Berikut Link Akun Facebook Wilayah Sulawesi
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

export default FacebookSulawesi;
