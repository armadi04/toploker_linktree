import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

interface FacebookLink {
  name: string;
  link: string;
  username: string;
}

export const jatengLinks: FacebookLink[] = [
  {
    name: "Klaten",
    username: "Info Loker Klaten",
    link: "https://www.facebook.com/groups/1024445944829418",
  },
  {
    name: "Sragen",
    username: "Info Loker Sragen",
    link: "https://www.facebook.com/groups/527252079059400",
  },
  {
    name: "Purwodadi Grobogan",
    username: "Info Loker Purwodadi Grobogan",
    link: "https://www.facebook.com/groups/1152431835591129",
  },
  {
    name: "Pati Rembang",
    username: "Info Loker Pati Rembang",
    link: "https://www.facebook.com/groups/1192856658150124",
  },
  {
    name: "Demak Semarang",
    username: "Info Loker Demak Semarang",
    link: "https://www.facebook.com/groups/1180976939336806",
  },
  {
    name: "Jepara",
    username: "Info Loker Jepara",
    link: "https://www.facebook.com/groups/4979130982193955",
  },
  {
    name: "Kendal",
    username: "Info Loker Kendal",
    link: "https://www.facebook.com/groups/710348133456098",
  },
  {
    name: "Batang dan Pekalongan",
    username: "Info Loker Batang dan Pekalongan",
    link: "https://www.facebook.com/groups/308230164759969",
  },
  {
    name: "Boyolali",
    username: "Info Loker Boyolali",
    link: "https://www.facebook.com/groups/710384077044887",
  },
  {
    name: "Ungaran Semarang",
    username: "Info Loker Ungaran Semarang",
    link: "https://www.facebook.com/groups/746537393018231",
  },
  {
    name: "Cilacap",
    username: "Info Loker Cilacap",
    link: "https://www.facebook.com/groups/480545167085025",
  },
  {
    name: "Purwokerto",
    username: "Info Loker Purwokerto",
    link: "https://www.facebook.com/groups/501968758241993",
  },
  {
    name: "Banjarnegara",
    username: "Info Loker Banjarnegara",
    link: "https://www.facebook.com/groups/499773001823661",
  },
  {
    name: "Purworejo",
    username: "Info Loker Purworejo",
    link: "https://www.facebook.com/groups/978644786344260",
  },
  {
    name: "Magelang",
    username: "Info Loker Magelang",
    link: "https://www.facebook.com/groups/565149768194060",
  },
  {
    name: "Sukoharjo",
    username: "Info Loker Sukoharjo",
    link: "https://www.facebook.com/groups/1390389814735809",
  },
  {
    name: "Karanganyar",
    username: "Info Loker Karanganyar",
    link: "https://www.facebook.com/groups/556913629076273",
  },
  {
    name: "Kudus",
    username: "Info Loker Kudus",
    link: "https://www.facebook.com/groups/728149981536314",
  },
  {
    name: "Pemalang",
    username: "Info Loker Pemalang",
    link: "https://www.facebook.com/groups/309455537970557",
  },
  {
    name: "Temanggung Wonosobo",
    username: "Info Loker Temanggung Wonosobo",
    link: "https://www.facebook.com/groups/1664847670518824",
  },
  {
    name: "Brebes Tegal",
    username: "Info Loker Brebes Tegal",
    link: "https://www.facebook.com/groups/1300715597005531",
  },
  {
    name: "Tegal",
    username: "Info Loker Tegal",
    link: "https://www.tiktok.com/@lokertegal.top",
  },
  {
    name: "Purbalingga",
    username: "Info Loker Purbalingga",
    link: "https://www.facebook.com/groups/682768373055356",
  },
  {
    name: "Wonogiri",
    username: "Info Loker Wonogiri",
    link: "https://www.facebook.com/groups/1130884031098535",
  },
  {
    name: "Salatiga",
    username: "Info Loker Salatiga",
    link: "https://www.facebook.com/groups/1032949767303555",
  },
  {
    name: "Semarang",
    username: "Info Loker Semarang",
    link: "https://www.facebook.com/groups/730921247899142",
  },
  {
    name: "Solo",
    username: "Info Loker Solo",
    link: "https://www.facebook.com/groups/561658681890902",
  },
  {
    name: "Kebumen",
    username: "Info Loker Kebumen",
    link: "https://www.facebook.com/groups/403820191272565",
  },
  {
    name: "Banyumas",
    username: "Info Loker Banyumas",
    link: "https://www.tiktok.com/@lokerbanyumastop",
  },
  {
    name: "Blora",
    username: "Info Loker Blora",
    link: "https://www.facebook.com/share/g/a5isvHqFCSBY1syW/",
  },
  {
    name: "Jogja",
    username: "Info Loker Jogja",
    link: "https://www.facebook.com/share/g/pr9SBTM7w6tM2eeT/",
  },
  {
    name: "Sleman",
    username: "Info Loker Sleman",
    link: "https://www.facebook.com/share/g/uJBSUsQ99FpLgK1a/",
  },
  {
    name: "Kulon Progo",
    username: "Info Loker Kulon Progo",
    link: "https://www.facebook.com/share/g/g9QyAPoUw4JmpXB9/",
  },
];

const FacebookJateng = () => {
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
            src="/images/facebook.svg"
            alt="Facebook"
            className="w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all duration-300 object-cover mx-auto mb-6"
          />
          <h2 className="text-center font-bold text-xl md:text-2xl text-gray-300 mb-8">
            Berikut Link Akun Facebook Provinsi Jawa Tengah
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
              <FaFacebook className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-200 font-medium">{account.name}</h3>
                <p className="flex text-sm text-gray-400">{account.username}</p>
              </div>
              <FaFacebook className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FacebookJateng;
