import React from "react";
import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa";

interface TiktokLink {
  name: string;
  link: string;
  username: string;
}

export const jabarLinks: TiktokLink[] = [
  {
    name: "Jakarta",
    username: "@lokerjakartatop",
    link: "https://www.tiktok.com/@lokerjakartatop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Bogor",
    username: "@lokerbogor.top",
    link: "https://www.tiktok.com/@lokerbogor.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Bandung",
    username: "@lokerbandung1",
    link: "https://www.tiktok.com/@lokerbandung1",
  },
  {
    name: "Bekasi",
    username: "@lokerbekasi.top",
    link: "https://www.tiktok.com/@lokerbekasi.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Depok",
    username: "@lokerdepok.top",
    link: "https://www.tiktok.com/@lokerdepok.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Garut",
    username: "@lokergarut.top",
    link: "https://www.tiktok.com/@lokergarut.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Sukabumi",
    username: "@lokersukabumi.top1",
    link: "https://www.tiktok.com/@lokersukabumi.top1?_t=8nLpERy3b9A&_r=11",
  },
  {
    name: "Karawang",
    username: "@lokerkarawangtop",
    link: "https://www.tiktok.com/@lokerkarawangtop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Cianjur",
    username: "@lokercianjurtop",
    link: "https://www.tiktok.com/@lokercianjurtop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Cirebon",
    username: "@lokercirebon.top",
    link: "https://www.tiktok.com/@lokercirebon.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Sumedang",
    username: "@lokersumedang.top",
    link: "https://www.tiktok.com/@lokersumedang.top?_t=8oGAubOj4ZF&_r=1",
  },
  {
    name: "Subang",
    username: "@lokersubangtop",
    link: "https://www.tiktok.com/@lokersubangtop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Purwakarta",
    username: "@lokerpurwakarta.top",
    link: "https://www.tiktok.com/@lokerpurwakarta.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Majalengka",
    username: "@lokermajalengkatop",
    link: "https://www.tiktok.com/@lokermajalengkatop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Ciamis",
    username: "@lokerciamistop",
    link: "https://www.tiktok.com/@lokerciamistop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Indramayu",
    username: "@lokerindramayu.top",
    link: "https://www.tiktok.com/@lokerindramayu.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Kuningan",
    username: "@lokerkuningantop",
    link: "https://www.tiktok.com/@lokerkuningantop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Cimahi",
    username: "@lokercimahi.top",
    link: "https://www.tiktok.com/@lokercimahi.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Tasikmalaya",
    username: "@lokertasikmalayatop",
    link: "https://www.tiktok.com/@lokertasikmalayatop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Tangerang",
    username: "@lokertangerang.top",
    link: "https://www.tiktok.com/@lokertangerang.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Cilegon",
    username: "@lokercilegon.top",
    link: "https://www.tiktok.com/@lokercilegon.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Serang",
    username: "@lokerserang.top",
    link: "https://www.tiktok.com/@lokerserang.top?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Banten",
    username: "@lokerbantentop",
    link: "https://www.tiktok.com/@lokerbantentop?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Pangandaran",
    username: "@lokerpangandaran.top",
    link: "https://www.tiktok.com/@lokerpangandaran.top?lang=id-ID",
  },
];

const TiktokJabar = () => {
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
            Berikut Link Akun TikTok Provinsi Jawa Barat
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

export default TiktokJabar;
