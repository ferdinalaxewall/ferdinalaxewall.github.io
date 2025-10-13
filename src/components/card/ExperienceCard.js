"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const ExperienceCard = ({ imgLink, position, year, company, imgClass, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * (index + 1) }}
      whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
      className="flex flex-col border border-white/5 bg-black/30 backdrop-blur items-center justify-center text-center rounded-lg py-6 px-3 gap-4 w-[150px] 2xl:w-[200px] h-[220px] project-card"
    >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-[75px] h-[75px] grid place-items-center p-2 rounded-full ${imgClass}`}
        >
            <Image src={imgLink} width={75} height={75} alt={company} loading="lazy" />
        </motion.div>
        <motion.div className="flex flex-col">
            <p className="text-sm font-semibold mb-2">{position}</p>
            <h3 className="text-xs font-light text-white/70">{year}</h3>
        </motion.div>
    </motion.div>
  )
}
