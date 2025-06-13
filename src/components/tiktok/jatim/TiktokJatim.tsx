import React from "react";
import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa";

interface TiktokLink {
  name: string;
  link: string;
  username: string;
}

export const jatimLinks: TiktokLink[] = [
  {
    name: "Banyuwangi",
    username: "@lokerbanyuwangitopp",
    link: "https://www.tiktok.com/@lokerbanyuwangitopp",
  },
  {
    name: "Bojonegoro",
    username: "@lowkerbojonegoro.top",
    link: "https://www.tiktok.com/@lowkerbojonegoro.top",
  },
  {
    name: "Gresik",
    username: "@lokergresik.top",
    link: "https://www.tiktok.com/@lokergresik.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Jember",
    username: "@lokerjembertop",
    link: "https://www.tiktok.com/@lokerjembertop",
  },
  {
    name: "Jombang",
    username: "@lokerjombang",
    link: "https://www.tiktok.com/@lokerjombang",
  },
  {
    name: "Kediri",
    username: "@lokerkediri.top",
    link: "https://www.tiktok.com/@lokerkediri.top",
  },
  {
    name: "Lamongan",
    username: "@lokerlamongantop",
    link: "https://www.tiktok.com/@lokerlamongantop",
  },
  {
    name: "Lumajang",
    username: "@lokerlumajang.top",
    link: "https://www.tiktok.com/@lokerlumajang.top",
  },
  {
    name: "Madiun",
    username: "@loker.madiun.top",
    link: "https://www.tiktok.com/@loker.madiun.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Mojokerto",
    username: "@loker.mojokertotop",
    link: "https://www.tiktok.com/@loker.mojokertotop",
  },
  {
    name: "Nganjuk",
    username: "@lokernganjuktop",
    link: "https://www.tiktok.com/@lokernganjuktop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Pasuruan",
    username: "@lokerpasuruan.top",
    link: "https://www.tiktok.com/@lokerpasuruan.top",
  },
  {
    name: "Ponorogo",
    username: "@infolokerponorogo.top",
    link: "https://www.tiktok.com/@infolokerponorogo.top",
  },
  {
    name: "Probolinggo",
    username: "@lokerprobolinggotop",
    link: "https://www.tiktok.com/@lokerprobolinggotop",
  },
  {
    name: "Sidoarjo",
    username: "@lokersidoarjotop",
    link: "https://www.tiktok.com/@lokersidoarjotop",
  },
  {
    name: "Tuban",
    username: "@lokertuban.top",
    link: "https://www.tiktok.com/@lokertuban.top",
  },
  {
    name: "Madura",
    username: "@lokermaduratop2",
    link: "https://www.tiktok.com/@lokermaduratop2",
  },
  {
    name: "Magetan Ngawi",
    username: "@lokermagetantop",
    link: "https://www.tiktok.com/@lokermagetantop",
  },
  {
    name: "Situbondo",
    username: "@lokersitubondowoso.top",
    link: "https://www.tiktok.com/@lokersitubondowoso.top",
  },
  {
    name: "Trenggalek Pacitan",
    username: "@lokertrenggalekpacitan",
    link: "https://www.tiktok.com/@lokertrenggalekpacitan",
  },
  {
    name: "Batu Malang",
    username: "@lokermalangbatu.top",
    link: "https://www.tiktok.com/@lokermalangbatu.top",
  },
  {
    name: "Blitar Tulungagung",
    username: "@lowkerblitartulungagung",
    link: "https://www.tiktok.com/@lowkerblitartulungagung",
  },
  {
    name: "Surabaya",
    username: "@lokersurabaya.top",
    link: "https://www.tiktok.com/@lokersurabaya.top",
  },
];

const TiktokJatim = () => {
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
            src="/images/tiktok.svg"
            alt="TikTok"
            className="w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all duration-300 object-cover mx-auto mb-6"
          />
          <h2 className="text-center font-bold text-xl md:text-2xl text-gray-300 mb-8">
            Berikut Link Akun TikTok Provinsi Jawa Timur
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
              <FaTiktok className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-200 font-medium">{account.name}</h3>
                <p className="text-sm text-gray-400">{account.username}</p>
              </div>
              <FaTiktok className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TiktokJatim;
