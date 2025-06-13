import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Search,
  ArrowLeft,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";

const citySosmed = [
  {
    name: "Jakarta",
    sosmed: ["Instagram", "Facebook", "Youtube"],
  },
  {
    name: "Bandung",
    sosmed: ["Instagram", "Twitter"],
  },
  {
    name: "Surabaya",
    sosmed: ["Facebook", "Youtube"],
  },
  {
    name: "Medan",
    sosmed: ["Instagram"],
  },
  {
    name: "Denpasar",
    sosmed: ["Instagram", "Facebook"],
  },
  // ... tambahkan kota lain sesuai kebutuhan
];

const sosmedIcons: Record<string, JSX.Element> = {
  Instagram: <Instagram className="inline h-5 w-5 text-pink-500 mr-1" />,
  Facebook: <Facebook className="inline h-5 w-5 text-blue-600 mr-1" />,
  Youtube: <Youtube className="inline h-5 w-5 text-red-600 mr-1" />,
  Twitter: <Twitter className="inline h-5 w-5 text-sky-400 mr-1" />,
};

const NavbarInstagram: React.FC = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const filteredCities = citySosmed.filter((city) =>
    city.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <header className="fixed top-0 w-full bg-gradient-to-l from-slate-900 to-gray-900 border-b border-purple-900 border-opacity-20 z-50">
      <nav className="mx-auto py-0 px-0 text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between pr-4">
            {/* Tombol BACK dengan icon panah kiri, lebih ke kiri */}
            <Button
              variant="ghost"
              className="text-md font-bold px-4 py-2 text-white flex items-center gap-2 -ml-4"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5" />
              BACK
            </Button>

            {/* Spacer tengah */}
            <div className="flex-1"></div>

            {/* Search interaktif dengan rekomendasi sosmed */}
            <div className="relative">
              {searchActive ? (
                <div className="flex flex-col">
                  <input
                    autoFocus
                    type="text"
                    className="bg-slate-800/60 rounded-lg px-3 py-1 text-md text-white outline-none border border-purple-700 focus:border-blue-500 min-w-[220px]"
                    placeholder="Cari nama kota/kabupaten"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onBlur={() => setSearchActive(false)}
                  />
                  {searchValue && (
                    <div className="absolute top-10 left-0 w-full bg-slate-900 border border-purple-800 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                      {filteredCities.length > 0 ? (
                        filteredCities.map((city) => (
                          <div
                            key={city.name}
                            className="px-4 py-2 hover:bg-purple-900/40 cursor-pointer text-white"
                            onMouseDown={() => {
                              setSearchValue(city.name);
                              setSearchActive(false);
                            }}
                          >
                            <div className="font-semibold mb-1">
                              {city.name}
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              {city.sosmed.map((s) => (
                                <span
                                  key={s}
                                  className="flex items-center bg-slate-800/80 rounded px-2 py-1 text-sm"
                                >
                                  {sosmedIcons[s] || (
                                    <span className="text-gray-400">{s}</span>
                                  )}
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-400">
                          Tidak ditemukan
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className="flex items-center gap-2 bg-slate-800/60 rounded-lg px-3 py-1 cursor-pointer min-w-[220px]"
                  onClick={() => setSearchActive(true)}
                >
                  <Search className="h-5 w-5 text-gray-300" />
                  <span className="text-gray-300 text-md">
                    Cari nama kota/kabupaten
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarInstagram;
