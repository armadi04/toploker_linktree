import React from "react";

const WebsiteMain = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Daftar Website
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Konten Website akan ditambahkan di sini */}
        <p className="text-white text-center col-span-full">
          Konten Website sedang dalam pengembangan
        </p>
      </div>
    </div>
  );
};

export default WebsiteMain;
