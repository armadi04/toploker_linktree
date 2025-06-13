import React from "react";
import { motion } from "framer-motion";
import { BiLogoInstagram } from "react-icons/bi";

interface InstagramLink {
  name: string;
  link: string;
  username: string;
}

export const jatimLinks: InstagramLink[] = [
  {
    name: "Banyuwangi",
    username: "@lokerbanyuwangi.top",
    link: "https://instagram.com/lokerbanyuwangi.top",
  },
  {
    name: "Bojonegoro",
    username: "@lowkerbojonegoro.top",
    link: "https://instagram.com/lowkerbojonegoro.top",
  },
  {
    name: "Gresik",
    username: "@loker_gresik.top",
    link: "https://instagram.com/loker_gresik.top",
  },
  {
    name: "Jember",
    username: "@lokerjember.top",
    link: "https://instagram.com/lokerjember.top",
  },
  {
    name: "Jombang",
    username: "@lokerjombang_kerja.top",
    link: "https://instagram.com/lokerjombang_kerja.top",
  },
  {
    name: "Kediri",
    username: "@lokerkediriraya.top",
    link: "https://instagram.com/lokerkediriraya.top",
  },
  {
    name: "Lamongan",
    username: "@loker_lamongan.top",
    link: "https://instagram.com/loker_lamongan.top",
  },
  {
    name: "Lumajang",
    username: "@Lokerlumajang.id.top",
    link: "https://instagram.com/Lokerlumajang.id.top",
  },
  {
    name: "Madiun",
    username: "@lokermadiun.top",
    link: "https://instagram.com/lokermadiun.top",
  },
  {
    name: "Mojokerto",
    username: "@lokermojokerto.top",
    link: "https://www.instagram.com/lokermojokerto.top/",
  },
  {
    name: "Nganjuk",
    username: "@lokernganjuk.top",
    link: "https://instagram.com/lokernganjuk.top",
  },
  {
    name: "Pasuruan",
    username: "@loker.pasuruan.top",
    link: "https://instagram.com/loker.pasuruan.top",
  },
  {
    name: "Ponorogo",
    username: "@infolokerponorogo.top",
    link: "https://instagram.com/infolokerponorogo.top",
  },
  {
    name: "Probolinggo",
    username: "@lokerprobolinggo.top",
    link: "https://instagram.com/lokerprobolinggo.top",
  },
  {
    name: "Sidoarjo",
    username: "@loker_sidoarjo.top",
    link: "https://instagram.com/loker_sidoarjo.top",
  },
  {
    name: "Tuban",
    username: "@loker_tuban.top",
    link: "https://instagram.com/loker_tuban.top",
  },
  {
    name: "Madura",
    username: "@lokermadura.top",
    link: "https://instagram.com/lokermadura.top",
  },
  {
    name: "Magetan Ngawi",
    username: "@lokermagetan.ngawi.top",
    link: "https://instagram.com/lokermagetan.ngawi.top",
  },
  {
    name: "Situbondo",
    username: "@lokersitubondowoso.top",
    link: "https://instagram.com/lokersitubondowoso.top",
  },
  {
    name: "Trenggalek Pacitan",
    username: "@lokerpacitantrenggalek.top",
    link: "https://instagram.com/lokerpacitantrenggalek.top",
  },
  {
    name: "Batu Malang",
    username: "@lokermalangbatu.top",
    link: "https://instagram.com/lokermalangbatu.top",
  },
  {
    name: "Blitar Tulungagung",
    username: "@lowkerblitartulungagung.top",
    link: "https://instagram.com/lowkerblitartulungagung.top",
  },
  {
    name: "Surabaya",
    username: "@lokersurabayaid.top",
    link: "https://instagram.com/lokersurabayaid.top",
  },
];

const InstagramJatim = () => {
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
            Berikut Link Akun Instagram Provinsi Jawa Timur
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

export default InstagramJatim;
