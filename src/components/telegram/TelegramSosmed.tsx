import React from "react";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TelegramSosmed = () => {
  const navigate = useNavigate();

  const telegramLinks = [
    {
      name: "Bali",
      link: "/telegram/bali",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/telegram/bali");
      },
    },
    {
      name: "Jawa Barat",
      link: "/telegram/jabar",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/telegram/jabar");
      },
    },
    {
      name: "Jawa Tengah",
      link: "/telegram/jateng",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/telegram/jateng");
      },
    },
    {
      name: "Jawa Timur",
      link: "/telegram/jatim",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/telegram/jatim");
      },
    },
    {
      name: "Sumatera",
      link: "/telegram/sumatera",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/telegram/sumatera");
      },
    },
    {
      name: "Kalimantan",
      link: "/telegram/kalimantan",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/telegram/kalimantan");
      },
    },
    {
      name: "Sulawesi",
      link: "/telegram/sulawesi",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/telegram/sulawesi");
      },
    },
    {
      name: "Riau",
      link: "/telegram/riau",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/telegram/riau");
      },
    },
    {
      name: "Papua dan Maluku",
      link: "/telegram/papua_maluku",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/telegram/papua_maluku");
      },
    },
    {
      name: "Nusa Tenggara",
      link: "/telegram/nusra",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/telegram/nusra");
      },
    },
  ];

  return (
    <section className="mx-auto max-w-6xl w-full min-h-screen px-4 pt-2 flex flex-col items-center justify-start">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-4 py-8"
      >
        <img
          src="/images/telegram.svg"
          alt="Telegram"
          className="w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all duration-300 object-cover mx-auto mb-6"
        />
        <h2 className="text-center font-bold text-xl text-gray-300">
          Berikut Link Akun Telegram Seluruh Provinsi di Indonesia
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 px-4"
      >
        {telegramLinks.map((province, index) => (
          <a
            key={index}
            href={province.link}
            target={province.name === "Bali" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            onClick={province.onClick}
            className="flex items-center justify-between p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-gray-700 transition-all duration-300 group"
          >
            <FaTelegram className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-gray-200 font-medium">{province.name}</h3>
            </div>
            <FaTelegram className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default TelegramSosmed;
