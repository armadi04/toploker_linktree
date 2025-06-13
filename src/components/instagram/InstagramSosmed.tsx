import React from "react";
import { motion } from "framer-motion";
import { BiLogoInstagram } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const InstagramSosmed = () => {
  const navigate = useNavigate();

  const instagramLinks = [
    {
      name: "Bali",
      link: "/instagram/bali",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/instagram/bali");
      },
    },
    {
      name: "Jawa Barat",
      link: "/instagram/jabar",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/instagram/jabar");
      },
    },
    {
      name: "Jawa Tengah",
      link: "/instagram/jateng",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/instagram/jateng");
      },
    },
    {
      name: "Jawa Timur",
      link: "/instagram/jatim",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/instagram/jatim");
      },
    },
    {
      name: "Sumatera",
      link: "/instagram/sumatera",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/instagram/sumatera");
      },
    },
    {
      name: "Kalimantan",
      link: "/instagram/kalimantan",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/instagram/kalimantan");
      },
    },
    {
      name: "Sulawesi",
      link: "/instagram/sulawesi",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/instagram/sulawesi");
      },
    },
    {
      name: "Riau",
      link: "/instagram/riau",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/instagram/riau");
      },
    },
    {
      name: "Papua dan Maluku",
      link: "/instagram/papua_maluku",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/instagram/papua_maluku");
      },
    },
    {
      name: "Nusa Tenggara",
      link: "/instagram/nusra",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/instagram/nusra");
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
          src="/images/instagram-logo.svg"
          alt="Instagram"
          className="w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all duration-300 object-cover mx-auto mb-6"
        />
        <h2 className="text-center font-bold text-xl text-gray-300">
          Berikut Link Akun Instagram Seluruh Provinsi di Indonesia
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-2xl flex flex-col items-center justify-center gap-4 px-4 mx-auto mb-6"
      >
        <a
          href="https://www.instagram.com/toplokercom/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-gray-700 transition-all duration-300 group"
        >
          <BiLogoInstagram className="text-4xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300 -ml-4" />
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-200 font-medium">
              Instagram Official TopLoker.com
            </h3>
            <p className="text-sm text-gray-400">@toplokercom</p>
          </div>
          <BiLogoInstagram className="text-4xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300 -mr-4" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 px-4"
      >
        {instagramLinks.map((province, index) => (
          <a
            key={index}
            href={province.link}
            target={province.name === "Bali" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            onClick={province.onClick}
            className="flex items-center justify-between p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-gray-700 transition-all duration-300 group"
          >
            <BiLogoInstagram className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-gray-200 font-medium">{province.name}</h3>
            </div>
            <BiLogoInstagram className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default InstagramSosmed;
