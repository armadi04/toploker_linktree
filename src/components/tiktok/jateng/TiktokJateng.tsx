import React from "react";
import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa";

interface TiktokLink {
  name: string;
  link: string;
  username: string;
}

export const jatengLinks: TiktokLink[] = [
  {
    name: "Klaten",
    username: "@lokerklaten.top",
    link: "https://www.tiktok.com/@lokerklaten.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Sragen",
    username: "@lokersragentopp",
    link: "https://www.tiktok.com/@lokersragentopp?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Purwodadi Grobogan",
    username: "@lokerpurwodaditop",
    link: "https://www.tiktok.com/@lokerpurwodaditop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Pati Rembang",
    username: "@lokerpatirembang.top",
    link: "https://www.tiktok.com/@lokerpatirembang.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Demak Semarang",
    username: "@lokerdemak.top",
    link: "https://www.tiktok.com/@lokerdemak.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Jepara",
    username: "@lokerjepara",
    link: "https://www.tiktok.com/@lokerjepara?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Kendal",
    username: "@lokerkendaltop5",
    link: "https://www.tiktok.com/@lokerkendaltop5?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Pekalongan",
    username: "@lokerpekalongantop",
    link: "https://www.tiktok.com/@lokerpekalongantop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Batang",
    username: "@lokerbatang.top1",
    link: "https://www.tiktok.com/@lokerbatang.top1",
  },
  {
    name: "Boyolali",
    username: "@lokerboyolalitop",
    link: "https://www.tiktok.com/@lokerboyolalitop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Ungaran Semarang",
    username: "@lokerungaran.top",
    link: "https://www.tiktok.com/@lokerungaran.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Cilacap",
    username: "@infolokercilacap.top",
    link: "https://www.tiktok.com/@infolokercilacap.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Purwokerto",
    username: "@lokerpurwokerto.top",
    link: "https://www.tiktok.com/@lokerpurwokerto.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Banjarnegara",
    username: "@lokerbanjarnegara.top",
    link: "https://www.tiktok.com/@lokerbanjarnegara.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Purworejo",
    username: "@lokerpurworejo.top",
    link: "https://www.tiktok.com/@lokerpurworejo.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Magelang",
    username: "@lokermagelangtop",
    link: "https://www.tiktok.com/@lokermagelangtop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Sukoharjo",
    username: "@lokersukoharjotop",
    link: "https://www.tiktok.com/@lokersukoharjotop",
  },
  {
    name: "Karanganyar",
    username: "@lokerkaranganyar.top",
    link: "https://www.tiktok.com/@lokerkaranganyar.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Kudus",
    username: "@lokerkudus.top",
    link: "https://www.tiktok.com/@lokerkudus.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Pemalang",
    username: "@lokerpemalangtop",
    link: "https://www.tiktok.com/@lokerpemalangtop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Temanggung Wonosobo",
    username: "@lokerwonosobotop",
    link: "https://www.tiktok.com/@lokerwonosobotop",
  },
  {
    name: "Brebes",
    username: "@lokerbrebestegal.top",
    link: "https://www.tiktok.com/@lokerbrebestegal.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Tegal",
    username: "@lokertegal.top",
    link: "https://www.tiktok.com/@lokertegal.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Purbalingga",
    username: "@lokerpurbalinggatop",
    link: "https://www.tiktok.com/@lokerpurbalinggatop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Wonogiri",
    username: "@lokerwonogiri.top",
    link: "https://www.tiktok.com/@lokerwonogiri.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Salatiga",
    username: "@lokersalatigatop",
    link: "https://www.tiktok.com/@lokersalatigatop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Semarang",
    username: "@lokersemarangtop",
    link: "https://www.tiktok.com/@lokersemarangtop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Solo",
    username: "@lokersoloid",
    link: "https://www.tiktok.com/@lokersoloid?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Kebumen",
    username: "@lokerkebumen.top",
    link: "https://www.tiktok.com/@lokerkebumen.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Banyumas",
    username: "@lokerbanyumastop",
    link: "https://www.tiktok.com/@lokerbanyumastop",
  },
  {
    name: "Blora",
    username: "@lokerblora.top",
    link: "https://www.tiktok.com/@lokerblora.top",
  },
  {
    name: "Jogja",
    username: "@lokerjogja.top",
    link: "https://www.tiktok.com/@lokerjogja.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Sleman",
    username: "@lokersleman",
    link: "https://www.tiktok.com/@lokersleman?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Kulon Progo",
    username: "@lokerkulonprogo",
    link: "https://www.tiktok.com/@lokerkulonprogo?is_from_webapp=1&sender_device=pc",
  },
];

const TiktokJateng = () => {
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
            Berikut Link Akun TikTok Provinsi Jawa Tengah
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

export default TiktokJateng;
