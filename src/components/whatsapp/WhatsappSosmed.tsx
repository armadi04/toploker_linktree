import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsappLink {
  name: string;
  link: string;
  username: string;
}

const whatsappLinks: WhatsappLink[] = [
  {
    name: "Loker Hari Ini by TopLoker.com",
    username: "@lokerhariantoploker",
    link: "https://whatsapp.com/channel/0029VakZdu9GZNCyjfR2302j",
  },
  {
    name: "INFO LOKER 2025",
    username: "@infoloker2025",
    link: "https://whatsapp.com/channel/0029Vay0oIt89inl8fPbhC0r",
  },
  // {
  //   name: "Jawa Tengah",
  //   username: "@lokerjawatengah",
  //   link: "https://www.youtube.com/@lokerjawatengah",
  // },
  // {
  //   name: "Jawa Timur",
  //   username: "@lokerjawatimur-m3i",
  //   link: "https://youtube.com/@lokerjawatimur-m3i?si=we8a4XMXJNdJBSRr",
  // },
  // {
  //   name: "Kalimantan Timur",
  //   username: "@lokerkalimantantimur",
  //   link: "https://youtube.com/@lokerkalimantantimur?si=pof3MzBAfJmAJads",
  // },
  // {
  //   name: "Kalimantan Tengah",
  //   username: "@lokerkalimantantengah",
  //   link: "https://youtube.com/@lokerkalimantantengah?si=WXgl0gUE5Ju9Hw7O",
  // },
  // {
  //   name: "Kalimantan Selatan",
  //   username: "@lokerkalimantanselatan",
  //   link: "https://youtube.com/@lokerkalimantanselatan?si=GESdtlXeYRFdIwtv",
  // },
  // {
  //   name: "Kalimantan Barat",
  //   username: "@lokertopkalimantanbarat",
  //   link: "https://youtube.com/@lokertopkalimantanbarat?si=X-OUzVD88sZ7eMch",
  // },
  // {
  //   name: "Kalimantan Utara",
  //   username: "@lokertopkalimantanutara",
  //   link: "https://youtube.com/@lokertopkalimantanutara?si=dG2a4P8xGzI-qu0w",
  // },
  // {
  //   name: "Sumatera Barat",
  //   username: "@toplokersumaterabarat",
  //   link: "https://www.youtube.com/@toplokersumaterabarat",
  // },
  // {
  //   name: "Sumatera Selatan",
  //   username: "@lokersumateraselatan",
  //   link: "https://www.youtube.com/@lokersumateraselatan",
  // },
  // {
  //   name: "Sumatera Utara",
  //   username: "@lokersumaterautara",
  //   link: "https://youtube.com/@lokersumaterautara?si=I3rDfqP8MpbSrfyd",
  // },
  // {
  //   name: "NTT",
  //   username: "@lokerntt-p9r",
  //   link: "https://www.youtube.com/@lokerntt-p9r",
  // },
  // {
  //   name: "NTB",
  //   username: "@lokerntb-l7w",
  //   link: "https://www.youtube.com/@lokerntb-l7w",
  // },
  // {
  //   name: "Bali",
  //   username: "@lowongankerjatopbali",
  //   link: "https://youtube.com/@lowongankerjatopbali?si=N7cEjZ8VNERBScE6",
  // },
  // {
  //   name: "Sulawesi Selatan",
  //   username: "@lokertopsulawesiselatan",
  //   link: "https://youtube.com/@lokertopsulawesiselatan?si=-7bslLQCTDUhVfBJ",
  // },
  // {
  //   name: "Sulawesi Tenggara",
  //   username: "@lokersulawesitenggara2",
  //   link: "https://www.youtube.com/@lokersulawesitenggara2",
  // },
  // {
  //   name: "Sulawesi Tengah",
  //   username: "@lokersulawesitengah-j2k",
  //   link: "https://www.youtube.com/@lokersulawesitengah-j2k",
  // },
  // {
  //   name: "Sulawesi Utara",
  //   username: "@lokersulawesiutara",
  //   link: "https://www.youtube.com/@lokersulawesiutara",
  // },
  // {
  //   name: "Papua",
  //   username: "@lokerpapua",
  //   link: "https://www.youtube.com/@lokerpapua",
  // },
  // {
  //   name: "Maluku",
  //   username: "@lokermaluku",
  //   link: "https://www.youtube.com/@lokermaluku",
  // },
];

const WhatsappSosmed = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center mb-12"
        >
          <img
            src="/images/whatsapp.svg"
            alt="WhatsApp"
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all duration-300 object-cover mb-6"
          />
          <h2 className="text-center font-bold text-2xl md:text-3xl text-gray-300 mb-8">
            Berikut Link Saluran WhatsApp TopLoker.com
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-6 max-w-xl mx-auto"
        >
          {whatsappLinks.map((account, index) => (
            <a
              key={index}
              href={account.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-gray-700 transition-all duration-300 group"
            >
              <FaWhatsapp className="text-3xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="flex flex-col items-center justify-center flex-grow mx-4">
                <h3 className="text-gray-200 font-medium text-lg text-center">
                  {account.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{account.username}</p>
              </div>
              <FaWhatsapp className="text-3xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhatsappSosmed;
