import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { Search, ArrowLeft } from "lucide-react";
import { jatengLinks } from "./TelegramJateng";
import { FaTelegram } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";

const NavbarJateng3: React.FC = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedAccount, setSelectedAccount] = useState<{
    name: string;
    username: string;
    link: string;
  } | null>(null);

  const accountRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        accountRef.current &&
        !accountRef.current.contains(event.target as Node)
      ) {
        setSelectedAccount(null);
        setSearchActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCities = jatengLinks.filter(
    (city) =>
      city.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      city.username.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <header className="fixed top-0 w-full bg-gradient-to-l from-slate-900 to-gray-900 border-b border-purple-900 border-opacity-20 z-50">
      <nav className="mx-auto py-0 px-0 text-white">
        <div className="container mx-auto px-4" ref={containerRef}>
          <div className="flex h-16 items-center justify-between pl-2 pr-4">
            {/* Tombol BACK dengan icon panah kiri */}
            <Button
              variant="ghost"
              className="text-md font-bold p-auto pl-2 rounded-[8px] text-white bg-slate-800/60 hover:bg-gray-900 hover:text-blue-600 flex items-center gap-1 -ml-4"
              onClick={() => window.history.back()}
            >
              <IoChevronBack className="h-5 w-5" />
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
                    className="bg-slate-800/60 rounded-lg px-3 py-1 text-md text-white outline-none border border-purple-700 focus:border-blue-500 min-w-[320px]"
                    placeholder="Cari nama kota/kabupaten atau username"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  {searchValue && (
                    <div className="absolute top-10 left-0 w-full bg-slate-900 border border-purple-800 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                      {filteredCities.length > 0 ? (
                        filteredCities.map((city) => (
                          <div
                            key={city.name}
                            className="px-4 py-2 hover:bg-purple-900/40 cursor-pointer text-white flex items-center gap-4"
                            onClick={() => {
                              setSelectedAccount(city); // Set state langsung saat diklik
                              setSearchActive(false);
                            }}
                          >
                            <div className="flex flex-col">
                              <span className="font-semibold">{city.name}</span>
                              <span className="text-sm text-gray-400">
                                {city.username}
                              </span>
                            </div>
                            <span className="ml-auto text-cyan-500">
                              <FaTelegram className="text-4xl" />
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-400">
                          Kota/kab. belum tersedia
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className="flex items-center gap-2 bg-slate-800/60 rounded-[8px] px-3 py-2 cursor-pointer min-w-[220px]"
                  onClick={() => setSearchActive(true)}
                >
                  <Search className="h-5 w-5 text-gray-300 hover:text-blue-600" />
                  <span className="text-gray-300 text-md hover:text-blue-600">
                    Cari nama kota/kabupaten
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tampilkan detail akun sosial media yang dipilih */}
        {selectedAccount && (
          <div ref={accountRef} className="mt-4 px-4">
            <h3 className="text-lg font-bold text-white">
              Akun Telegram Terkait
            </h3>
            <div className="flex items-center gap-4 mt-2 p-4 bg-gray-800/80 rounded-xl shadow-lg">
              <FaTelegram className="text-2xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
              <div>
                <p className="text-white font-semibold">
                  {selectedAccount.name}
                </p>
                <p className="text-gray-400">{selectedAccount.username}</p>
              </div>
              <Button
                variant="ghost"
                className="ml-auto text-cyan-500"
                onClick={() => {
                  window.open(selectedAccount.link, "_blank");
                  setSelectedAccount(null); // Reset state setelah link dibuka
                }}
              >
                Kunjungi
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarJateng3;
