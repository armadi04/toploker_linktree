import React from "react";
import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa";

interface TiktokLink {
  name: string;
  link: string;
  username: string;
}

export const sumateraLinks: TiktokLink[] = [
  {
    name: "Sumatera Barat",
    username: "@lokersumbar.top",
    link: "https://www.tiktok.com/@lokersumbar.top",
  },
  {
    name: "Padang",
    username: "@lokerpadang.top",
    link: "https://www.tiktok.com/@lokerpadang.top",
  },
  {
    name: "Bukittinggi",
    username: "@lokerbukittinggi.top",
    link: "https://www.tiktok.com/@lokerbukittinggi.top",
  },
  {
    name: "Dharmasraya dan Solok",
    username: "@lokerdharmasolok.top",
    link: "https://www.tiktok.com/@lokerdharmasolok.top",
  },
  {
    name: "Payakumbuh",
    username: "@lokerpayakumbuh.top",
    link: "https://www.tiktok.com/@lokerpayakumbuh.top",
  },
  {
    name: "Sumatera Selatan",
    username: "@lokersumsel.top",
    link: "https://www.tiktok.com/@lokersumsel.top",
  },
  {
    name: "Palembang",
    username: "@palembang.toploker",
    link: "https://www.tiktok.com/@palembang.toploker",
  },
  {
    name: "Muara Enim dan Lahat",
    username: "@lokermuaraenimlahat.top",
    link: "https://www.tiktok.com/@lokermuaraenimlahat.top",
  },
  {
    name: "Lampung",
    username: "@lokerlampung.top",
    link: "https://www.tiktok.com/@lokerlampung.top",
  },
  {
    name: "Bandar Lampung",
    username: "@lokerbdl.top",
    link: "https://www.tiktok.com/@lokerbdl.top",
  },
  {
    name: "Metro Lampung",
    username: "@lokermetrolampung.top1",
    link: "https://www.tiktok.com/@lokermetrolampung.top1",
  },
  {
    name: "Bengkulu",
    username: "@lokerbengkulu.top1",
    link: "https://www.tiktok.com/@lokerbengkulu.top1",
  },
  {
    name: "Bungo Bangko",
    username: "@lokerbungobangko.top",
    link: "https://www.tiktok.com/@lokerbungobangko.top",
  },
  {
    name: "Jambi",
    username: "@lokerjambi.top",
    link: "https://www.tiktok.com/@lokerjambi.top",
  },
  {
    name: "Sumatera Utara",
    username: "@lokersumut.top",
    link: "https://www.tiktok.com/@lokersumut.top",
  },
  {
    name: "Medan",
    username: "@lokermedan.top",
    link: "https://www.tiktok.com/@lokermedan.top",
  },
  {
    name: "Labuhan Batu",
    username: "@lokerlabuhanbatu.top",
    link: "https://www.tiktok.com/@lokerlabuhanbatu.top",
  },
  {
    name: "Aceh",
    username: "@lokeraceh.top",
    link: "https://www.tiktok.com/@lokeraceh.top",
  },
  {
    name: "Banda Aceh",
    username: "@lokerbandaaceh.top",
    link: "https://www.tiktok.com/@lokerbandaaceh.top",
  },
];

const TiktokSumatera = () => {
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
            Berikut Link Akun TikTok Wilayah Sumatera
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

export default TiktokSumatera;
