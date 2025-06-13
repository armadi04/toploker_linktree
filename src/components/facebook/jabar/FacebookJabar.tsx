import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

interface FacebookLink {
  name: string;
  link: string;
  username: string;
}

export const jabarLinks: FacebookLink[] = [
  {
    name: "Jakarta",
    username: "Info Loker Jakarta",
    link: "https://www.facebook.com/groups/3358229264408458",
  },
  {
    name: "Bogor",
    username: "Info Loker Bogor",
    link: "https://www.facebook.com/groups/1660890917588899",
  },
  {
    name: "Bandung",
    username: "Info Loker Bandung",
    link: "https://www.facebook.com/groups/405166298283369",
  },
  {
    name: "Bekasi",
    username: "Info Loker Bekasi",
    link: "https://www.facebook.com/groups/839745817204490",
  },
  {
    name: "Depok",
    username: "Info Loker Depok",
    link: "https://www.facebook.com/groups/684150016139423",
  },
  {
    name: "Garut",
    username: "Info Loker Garut",
    link: "https://www.facebook.com/groups/526693932458666",
  },
  {
    name: "Sukabumi",
    username: "Info Loker Sukabumi",
    link: "https://www.facebook.com/groups/528465005405187",
  },
  {
    name: "Karawang",
    username: "Info Loker Karawang",
    link: "https://www.facebook.com/groups/685574016031819",
  },
  {
    name: "Cianjur",
    username: "Info Loker Cianjur",
    link: "https://www.facebook.com/groups/748425776318376",
  },
  {
    name: "Cirebon",
    username: "Info Loker Cirebon",
    link: "https://www.facebook.com/groups/491963676008945",
  },
  {
    name: "Sumedang",
    username: "Info Loker Sumedang",
    link: "https://www.facebook.com/groups/546403430425655",
  },
  {
    name: "Subang",
    username: "Info Loker Subang",
    link: "https://www.facebook.com/groups/1359992264467291",
  },
  {
    name: "Purwakarta",
    username: "Info Loker Purwakarta",
    link: "https://www.facebook.com/groups/556099235926297",
  },
  {
    name: "Majalengka",
    username: "Info Loker Majalengka",
    link: "https://www.facebook.com/groups/1934472440220906",
  },
  {
    name: "Ciamis",
    username: "Info Loker Ciamis",
    link: "https://www.facebook.com/share/g/1DauVQydaY/",
  },
  {
    name: "Indramayu",
    username: "Info Loker Indramayu",
    link: "https://www.facebook.com/share/g/15k19qU2XH/",
  },
  {
    name: "Kuningan",
    username: "Info Loker Kuningan",
    link: "https://www.facebook.com/share/g/1Grmp9o6Uh/",
  },
  {
    name: "Cimahi",
    username: "Info Loker Cimahi",
    link: "https://www.facebook.com/share/g/1AQuizU6ze/",
  },
  {
    name: "Tasikmalaya",
    username: "Info Loker Tasikmalaya",
    link: "https://www.facebook.com/share/g/1Hc1uM5hdK/",
  },
  {
    name: "Tangerang",
    username: "Info Loker Tangerang",
    link: "https://www.facebook.com/share/g/18qGe64vPd/",
  },
  {
    name: "Cilegon",
    username: "Info Loker Cilegon",
    link: "https://www.facebook.com/share/g/1GhBdVPY7Y/",
  },
  {
    name: "Serang",
    username: "Info Loker Serang",
    link: "https://www.facebook.com/share/g/1DjEeacyeJ/",
  },
  {
    name: "Banten",
    username: "Info Loker Banten",
    link: "https://www.facebook.com/share/g/1YAKNWCthN/",
  },
  {
    name: "Pangandaran",
    username: "Info Loker Pangandaran",
    link: "https://www.facebook.com/share/g/15VattvMXA/",
  },
];

const FacebookJabar = () => {
  return (
    <div className="relative min-h-screen w-full overflow-y-auto pt-16 pb-20">
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
            Berikut Link Akun Facebook Provinsi Jawa Barat
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

export default FacebookJabar;
