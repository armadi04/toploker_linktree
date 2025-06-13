import React from "react";
import { motion } from "framer-motion";
import { BiLogoInstagram } from "react-icons/bi";

interface InstagramLink {
  name: string;
  link: string;
  username: string;
}

export const jabarLinks: InstagramLink[] = [
  {
    name: "Jakarta",
    username: "@lokerjakarta.top",
    link: "https://instagram.com/lokerjakarta.top",
  },
  {
    name: "Tangerang",
    username: "@lokertangerang.top",
    link: "https://instagram.com/lokertangerang.top",
  },
  {
    name: "Bogor",
    username: "@lokerbogor.top",
    link: "https://instagram.com/lokerbogor.top",
  },
  {
    name: "Bekasi",
    username: "@lokerbekasii.top",
    link: "https://instagram.com/lokerbekasii.top",
  },
  {
    name: "Depok",
    username: "@lokerdepok.co.top",
    link: "https://instagram.com/lokerdepok.co.top",
  },
  {
    name: "Serang",
    username: "@lokerserang.top",
    link: "https://instagram.com/lokerserang.top",
  },
  {
    name: "Banten",
    username: "@lokerbanten.top",
    link: "https://instagram.com/lokerbanten.top",
  },
  {
    name: "Tasikmalaya",
    username: "@lokertasikmalaya.top",
    link: "https://instagram.com/lokertasikmalaya.top",
  },
  {
    name: "Sukabumi",
    username: "@lokersukabumi.top",
    link: "https://instagram.com/lokersukabumi.top",
  },
  {
    name: "Bandung",
    username: "@lokerbandungid.top",
    link: "https://instagram.com/lokerbandungid.top",
  },
  {
    name: "Cimahi",
    username: "@lokercimahi.top",
    link: "https://instagram.com/lokercimahi.top",
  },
  {
    name: "Cianjur",
    username: "@lokercianjur.top",
    link: "https://instagram.com/lokercianjur.top",
  },
  {
    name: "Garut",
    username: "@lokergarutgo.top",
    link: "https://instagram.com/lokergarutgo.top",
  },
  {
    name: "Indramayu",
    username: "@lokerindramayu.top",
    link: "https://instagram.com/lokerindramayu.top",
  },
  {
    name: "Karawang",
    username: "@lokerkarawang.top",
    link: "https://instagram.com/lokerkarawang.top",
  },
  {
    name: "Kuningan",
    username: "@lokerkuningan.top",
    link: "https://instagram.com/lokerkuningan.top",
  },
  {
    name: "Majalengka",
    username: "@lokermajalengka.top",
    link: "https://instagram.com/lokermajalengka.top",
  },
  {
    name: "Pangandaran",
    username: "@lokerpangandaran.top",
    link: "https://instagram.com/lokerpangandaran.top",
  },
  {
    name: "Purwakarta",
    username: "@lokerpurwakarta.top",
    link: "https://instagram.com/lokerpurwakarta.top",
  },
  {
    name: "Subang",
    username: "@lokersubang.top",
    link: "https://instagram.com/lokersubang.top",
  },
  {
    name: "Sukabumi",
    username: "@lokersukabumi.top",
    link: "https://instagram.com/lokersukabumi.top",
  },
  {
    name: "Sumedang",
    username: "@lokersumedang.top",
    link: "https://instagram.com/lokersumedang.top",
  },
  {
    name: "Ciamis",
    username: "@lokerciamisid.top",
    link: "https://instagram.com/lokerciamisid.top",
  },
  {
    name: "Cirebon",
    username: "@lokercirebonraya.top",
    link: "https://instagram.com/lokercirebonraya.top",
  },
  {
    name: "Cilegon",
    username: "@lokercilegon.top",
    link: "https://instagram.com/lokercilegon.top",
  },
];

const InstagramJabar = () => {
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
            Berikut Link Akun Instagram Provinsi Jawa Barat
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

export default InstagramJabar;
