"use client";

import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { motion } from "framer-motion";

export const SocialMediaCard = ({ icon, title, name, link, index = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      className="social-media-box"
    >
        <div className="flex flex-row items-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
              className="text-indigo-400 bg-indigo-500/10 p-2 rounded"
            >
                {icon}
            </motion.div>
            <div className="flex flex-col">
                <p className="text-xs text-white/70 font-light">{title}</p>
                <h3 className="text-sm font-medium">{name}</h3>
            </div>
        </div>

        <motion.a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="transition-all"
        >
            <LuCircleArrowOutUpRight className="w-[20px] h-[20px] text-white" />
        </motion.a>
    </motion.div>
  )
}
