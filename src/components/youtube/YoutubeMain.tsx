import React from "react";
import YoutubeSosmed from "./YoutubeSosmed";
import { motion } from "framer-motion";

const YoutubeMain = () => {
  return (
    <section id="youtube" className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <YoutubeSosmed />
      </motion.div>
    </section>
  );
};

export default YoutubeMain;
