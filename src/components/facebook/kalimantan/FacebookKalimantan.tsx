import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

interface FacebookLink {
  name: string;
  link: string;
  username: string;
}

export const kalimantanLinks: FacebookLink[] = [
  {
    name: "Kalimantan Barat",
    username: "Info Loker Kalbar",
    link: "https://www.facebook.com/groups/1136179290276434",
  },
  {
    name: "Singkawang",
    username: "Info Loker Singkawang",
    link: "https://www.facebook.com/groups/1431365497286464",
  },
  {
    name: "Sekadau",
    username: "Info Loker Sekadau",
    link: "https://www.facebook.com/groups/1407516406339226",
  },
  {
    name: "Putussibau",
    username: "Info Loker Putussibau",
    link: "https://www.facebook.com/groups/406859184665307",
  },
  {
    name: "Sambas",
    username: "Info Loker Sambas",
    link: "https://www.facebook.com/groups/444373167518217",
  },
  {
    name: "Mempawah",
    username: "Info Loker Mempawah",
    link: "https://www.facebook.com/groups/1132735423947294",
  },
  {
    name: "Melawi",
    username: "Info Loker Melawi",
    link: "https://www.facebook.com/groups/408107837940074",
  },
  {
    name: "Kayong Utara",
    username: "Info Loker Kayong Utara",
    link: "https://www.facebook.com/groups/428935369055442",
  },
  {
    name: "Sanggau",
    username: "Info Loker Sanggau",
    link: "https://www.facebook.com/groups/537985227994676",
  },
  {
    name: "Ketapang",
    username: "Info Loker Ketapang",
    link: "https://www.facebook.com/groups/410842640915504",
  },
  {
    name: "Landak",
    username: "Info Loker Landak",
    link: "https://www.facebook.com/groups/714374816440531",
  },
  {
    name: "Sintang",
    username: "Info Loker Sintang",
    link: "https://www.facebook.com/groups/709285263714820",
  },
  {
    name: "Pontianak",
    username: "Info Loker Pontianak",
    link: "https://www.facebook.com/groups/1371993096601408",
  },
  {
    name: "Bengkayang",
    username: "Info Loker Bengkayang",
    link: "https://www.facebook.com/groups/715122983139389",
  },
  {
    name: "Kalteng",
    username: "Info Loker Kalteng",
    link: "https://www.facebook.com/groups/757022945430519",
  },
  {
    name: "Palangkaraya",
    username: "Info Loker Palangkaraya",
    link: "https://www.facebook.com/groups/378139557616026",
  },
  {
    name: "Kapuas Hulu",
    username: "Info Loker Kapuas Hulu",
    link: "https://www.facebook.com/share/g/12G9xefz96V/",
  },
  {
    name: "Pangkalan Bun",
    username: "Info Loker Pangkalan Bun",
    link: "https://www.facebook.com/groups/7529827723755081",
  },
  {
    name: "Sampit",
    username: "Info Loker Sampit",
    link: "https://www.facebook.com/groups/378435951016401",
  },
  {
    name: "Kalimantan Utara",
    username: "Info Loker Kalimantan Utara",
    link: "https://www.facebook.com/groups/757450138627456",
  },
  {
    name: "Tarakan",
    username: "Info Loker Tarakan",
    link: "https://www.facebook.com/groups/343466227896694",
  },
  {
    name: "Kaltim",
    username: "Info Loker Kaltim",
    link: "https://www.facebook.com/groups/1654805928251859",
  },
  {
    name: "Balik Papan",
    username: "Info Loker Balik Papan",
    link: "https://www.facebook.com/groups/529423348883960",
  },
  {
    name: "Kutai",
    username: "Info Loker Kutai",
    link: "https://www.facebook.com/share/g/1AxCrfTbKy/",
  },
  {
    name: "Samarinda",
    username: "Info Loker Samarinda",
    link: "https://www.facebook.com/groups/3042451619310610",
  },
  {
    name: "Bontang",
    username: "Info Loker Bontang",
    link: "https://www.facebook.com/groups/3634427710014615",
  },
  {
    name: "Berau",
    username: "Info Loker Berau",
    link: "https://www.facebook.com/groups/413258997327964",
  },
  {
    name: "Sangatta",
    username: "Info Loker Sangatta",
    link: "https://www.facebook.com/groups/1798447537155669",
  },
  {
    name: "Paser",
    username: "Info Loker Paser",
    link: "https://www.facebook.com/groups/716987609448263",
  },
  {
    name: "Mahakam Ulu",
    username: "Info Loker Mahakam Ulu",
    link: "https://www.facebook.com/groups/894563025272580",
  },
  {
    name: "Kalsel",
    username: "Info Loker Kalsel",
    link: "https://www.facebook.com/groups/697546644661045",
  },
  {
    name: "Banjarbaru",
    username: "Info Loker Banjarbaru",
    link: "https://www.facebook.com/groups/423784735993350",
  },
  {
    name: "Banjarmasin",
    username: "Info Loker Banjarmasin",
    link: "https://www.facebook.com/groups/1080926629471475",
  },
  {
    name: "Barabai",
    username: "Info Loker Barabai",
    link: "https://www.facebook.com/groups/536735514650240",
  },
  {
    name: "Kota Baru",
    username: "Info Loker Kota Baru",
    link: "https://www.facebook.com/groups/448671497096987",
  },
  {
    name: "Amuntai",
    username: "Info Loker Amuntai",
    link: "https://www.facebook.com/groups/5010909209004376",
  },
  {
    name: "Tabalong",
    username: "Info Loker Tabalong",
    link: "https://www.facebook.com/groups/3107379962845596",
  },
  {
    name: "Tanah Bumbu",
    username: "Info Loker Tanah Bumbu",
    link: "https://www.facebook.com/groups/1633048287057690",
  },
  {
    name: "Tanah Laut",
    username: "Info Loker Tanah Laut",
    link: "https://www.facebook.com/groups/1720046868341693",
  },
  {
    name: "Balangan",
    username: "Info Loker Balangan",
    link: "https://www.facebook.com/groups/763432534816459",
  },
];

const FacebookKalimantan = () => {
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
            Berikut Link Akun Facebook Wilayah Kalimantan
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mx-auto"
        >
          {kalimantanLinks.map((account, index) => (
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
                <p className="text-sm text-gray-400">{account.username}</p>
              </div>
              <FaFacebook className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FacebookKalimantan;
