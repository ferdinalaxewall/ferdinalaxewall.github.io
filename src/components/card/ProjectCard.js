"use client";

import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { motion } from "framer-motion";

export const ProjectCard = ({ title, description, icon, link, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.05 * (index + 1) }}
      whileHover={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}
      className="project-box"
    >
      <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
            className="grid place-items-center text-indigo-400 bg-indigo-500/10 p-3 rounded-lg"
          >
            {icon}
          </motion.div>
          <div className="flex flex-col">
            <h3 className="font-medium text-sm md:text-base">{title}</h3>
            <p className="text-xs md:text-sm text-white/70 font-light">{description}</p>
          </div>
      </div>
      {link && (
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 3.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <HiOutlineArrowCircleRight className="w-[30px] h-[30px] text-white" />
        </motion.a>
      )}
    </motion.div>
  );
};
