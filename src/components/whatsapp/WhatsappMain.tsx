import React from "react";
import WhatsappSosmed from "./WhatsappSosmed";
import { motion } from "framer-motion";

const WhatsappMain = () => {
  return (
    <section id="whatsapp" className="pt-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <WhatsappSosmed />
      </motion.div>
    </section>
  );
};

export default WhatsappMain;
