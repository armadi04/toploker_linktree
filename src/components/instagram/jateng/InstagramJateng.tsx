import React from "react";
import { motion } from "framer-motion";
import { BiLogoInstagram } from "react-icons/bi";

interface InstagramLink {
  name: string;
  link: string;
  username: string;
}

export const jatengLinks: InstagramLink[] = [
  {
    name: "Klaten",
    username: "@lokerklaten.top",
    link: "https://instagram.com/lokerklaten.top",
  },
  {
    name: "Sragen",
    username: "@lokersragenid.top",
    link: "https://instagram.com/lokersragenid.top",
  },
  {
    name: "Purwodadi Grobogan",
    username: "@lokerpurwodadigrobogan.top",
    link: "https://instagram.com/lokerpurwodadigrobogan.top",
  },
  {
    name: "Pati Rembang",
    username: "@info_lokerpatirembang.top",
    link: "https://instagram.com/info_lokerpatirembang.top",
  },
  {
    name: "Demak Semarang",
    username: "@lokerdemaksemarang.top",
    link: "https://www.instagram.com/lokerdemaksemarang.top/",
  },
  {
    name: "Jepara",
    username: "@lokerjeparaid.top",
    link: "https://www.instagram.com/lokerjeparaid.top/",
  },
  {
    name: "Kendal",
    username: "@lokerkendal.top",
    link: "https://instagram.com/lokerkendal.top",
  },
  {
    name: "Batang Pekalongan",
    username: "@lokerbatangpekalonganid.top",
    link: "https://instagram.com/lokerbatangpekalonganid.top",
  },
  {
    name: "Boyolali",
    username: "@lokerboyolalii.top",
    link: "https://www.instagram.com/lokerboyolalii.top/",
  },
  {
    name: "Ungaran Semarang",
    username: "@lokerungaransemarangid.top",
    link: "https://www.instagram.com/lokerungaransemarangid.top/",
  },
  {
    name: "Cilacap",
    username: "@lokercilacap.top",
    link: "https://instagram.com/lokercilacap.top",
  },
  {
    name: "Purwokerto",
    username: "@lokerpurwokerto.top",
    link: "https://instagram.com/lokerpurwokerto.top",
  },
  {
    name: "Banjarnegara",
    username: "@lokerbanjarnegaraa.top",
    link: "https://instagram.com/lokerbanjarnegaraa.top",
  },
  {
    name: "Purworejo",
    username: "@purworejoloker.top",
    link: "https://instagram.com/purworejoloker.top",
  },
  {
    name: "Magelang",
    username: "@lokermagelang.top",
    link: "https://www.instagram.com/lokermagelang.top/",
  },
  {
    name: "Sukoharjo",
    username: "@lokersukoharjo.top",
    link: "https://instagram.com/lokersukoharjo.top",
  },
  {
    name: "Karanganyar",
    username: "@lokerkaranganyar.top",
    link: "https://instagram.com/lokerkaranganyar.top",
  },
  {
    name: "Kudus",
    username: "@lokerkudus.top",
    link: "https://www.instagram.com/lokerkudus.top/",
  },
  {
    name: "Pemalang",
    username: "@lokerpemalang.official.top",
    link: "https://instagram.com/lokerpemalang.official.top",
  },
  {
    name: "Temanggung Wonosobo",
    username: "@lokerwonosobotmg.top",
    link: "https://www.instagram.com/lokerwonosobotmg.top/",
  },
  {
    name: "Brebes",
    username: "@infolokerbrebes.top",
    link: "https://www.instagram.com/infolokerbrebes.top/",
  },
  {
    name: "Purbalingga",
    username: "@lokerpurbalingga.top",
    link: "https://www.instagram.com/lokerpurbalingga.top/",
  },
  {
    name: "Wonogiri",
    username: "@lokerwonogiri.top",
    link: "https://instagram.com/lokerwonogiri.top",
  },
  {
    name: "Salatiga",
    username: "@lokersalatigaid.top",
    link: "https://www.instagram.com/lokersalatigaid.top/",
  },
  {
    name: "Semarang",
    username: "@lokersemarangid.top",
    link: "https://www.instagram.com/lokersemarangid.top/",
  },
  {
    name: "Solo",
    username: "@lokersoloid.top",
    link: "https://instagram.com/lokersoloid.top",
  },
  {
    name: "Kebumen",
    username: "@lokerkebumenid.top",
    link: "https://www.instagram.com/lokerkebumenid.top/",
  },
  {
    name: "Tegal",
    username: "@infolokertegal.top",
    link: "https://www.instagram.com/infolokertegal.top/",
  },
  {
    name: "Blora",
    username: "@lokerbloraid.top",
    link: "https://www.instagram.com/lokerbloraid.top/",
  },
  {
    name: "Jogja",
    username: "@lokerjogjaid.top",
    link: "https://www.instagram.com/lokerjogjaid.top/",
  },
  {
    name: "Sleman",
    username: "@lokerslemanid.top",
    link: "https://www.instagram.com/lokerslemanid.top/",
  },
  {
    name: "Kulon Progo",
    username: "@lokerkulonprogoid.top",
    link: "https://www.instagram.com/lokerkulonprogoid.top/",
  },
];

const InstagramJateng = () => {
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
            Berikut Link Akun Instagram Provinsi Jawa Tengah
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mx-auto"
        >
          {jatengLinks.map((account, index) => (
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

export default InstagramJateng;
