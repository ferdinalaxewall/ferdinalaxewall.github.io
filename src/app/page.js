"use client";

import { FaFilePdf, FaGithub, FaGitlab, FaInbox, FaLinkedin } from "react-icons/fa";
import { BsPersonFillGear } from "react-icons/bs";
import { MdCastForEducation, MdOutlineAssessment, MdPinDrop, MdWaterDrop } from "react-icons/md";
import { LuRadioTower } from "react-icons/lu";
import { BiTrip } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaBuildingUser, FaDollarSign, FaHandHoldingDollar, FaMosque, FaPersonRunning, FaUserGroup } from "react-icons/fa6";
import { RiAdvertisementLine } from "react-icons/ri";
import { BsQrCodeScan } from "react-icons/bs";
import { SocialMediaCard } from "@/components/card/SocialMediaCard";
import { ExperienceCard } from "@/components/card/ExperienceCard";
import { ProjectCard } from "@/components/card/ProjectCard";
import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    {
      title: "Member Management & Registration",
      description: "Asosiasi Pengusaha & Pengelola Dapur Makan Bergizi Gratis - APPDMBGI",
      icon: <FaUserGroup className="w-[25px] h-[25px]" />,
    },
    {
      title: "Water Bill Payment Application",
      description: "PDAM Tirta Agara",
      icon: <MdWaterDrop className="w-[25px] h-[25px]" />,
      link: "https://pdamtirtaagara.com/",
    },
    {
      title: "SRC QRIS Soundbox",
      description: "Sampoerna Retail Community - SRC",
      icon: <BsQrCodeScan className="w-[25px] h-[25px]" />,
    },
    {
      title: "Running Registration Application",
      description: "Nusantara Run",
      icon: <FaPersonRunning className="w-[25px] h-[25px]" />,
      link: "https://nusantararun.id/",
    },
    {
      title: "CTS Company Profile",
      description: "PT Catalyst Technology Solution - CTS",
      icon: <CgWebsite className="w-[25px] h-[25px]" />,
    },
    {
      title: "Finance & Accounting Application",
      description: "PAM Cargo",
      icon: <FaDollarSign className="w-[25px] h-[25px]" />,
    },
    {
      title: "IOT Crusher Management System",
      description: "PT Solusi Bangun Andalas",
      icon: <LuRadioTower className="w-[25px] h-[25px]" />,
    },
    {
      title: "Hajj and Umrah Travel Application",
      description: "PT Gamal Hikmah Pusaka",
      icon: <FaMosque className="w-[25px] h-[25px]" />,
      link: "https://gubkhajiumroh.id/",
    },
    {
      title: "Waqf Management Application",
      description: "Masyarakat Ekonomi Syariah - MES",
      icon: <FaHandHoldingDollar className="w-[25px] h-[25px]" />,
      link: "https://wakafmes.id/",
    },
    {
      title: "Advertising Service Application",
      description: "INFINA Indonesia",
      icon: <RiAdvertisementLine className="w-[25px] h-[25px]" />,
      link: "https://infina.co.id/",
    },
    {
      title: "Travel Service Application",
      description: "J-Trip Indonesia",
      icon: <BiTrip className="w-[25px] h-[25px]" />,
      link: "https://jtrip.id/",
    },
    {
      title: "Overseas Student Registration Application",
      description: "Atlas Edu",
      icon: <MdCastForEducation className="w-[25px] h-[25px]" />,
      link: "https://atlas-edu.com/",
    },
    {
      title: "Travel Service Application",
      description: "PT MyKiss Solution Technology",
      icon: <BiTrip className="w-[25px] h-[25px]" />,
      link: "https://mykiss.id/",
    },
    {
      title: "HR Management Application",
      description: "PT Harmony Land Group",
      icon: <BsPersonFillGear className="w-[25px] h-[25px]" />,
    },
    {
      title: "Property Consultant Management Application",
      description: "Mitra Mugi Properti",
      icon: <FaBuildingUser className="w-[25px] h-[25px]" />,
    },
    {
      title: "Lightech Assement Application",
      description: "PT Academia Citra Abadi",
      icon: <MdOutlineAssessment className="w-[25px] h-[25px]" />,
    },
    {
      title: "Company Profile with Partnership Management",
      description: "CV Karya Dawoon Indonesia",
      icon: <MdPinDrop className="w-[25px] h-[25px]" />,
      link: "https://dawoonindonesia.com/"
    },
  ]
  return (
    <main className="grid grid-cols-12 lg:grid-rows-2 gap-2 items-stretch justify-center h-full w-full my-auto mx-0 min-h-screen p-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="col-span-12 sm:col-span-12 lg:col-span-5 profile-box"
        id="profile"
      >
          <div className="flex flex-col justify-center gap-8 items-start h-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-row flex-wrap items-center gap-4"
              >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4, type: "spring", stiffness: 200 }}
                    className="w-[50px] h-[50px] bg-indigo-500/50 rounded-full grid place-items-center text-xl"
                  >
                    👋
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex flex-col"
                  >
                    <h1 className="font-medium">Hi, I'm Ferdinalaxewall</h1>
                    <p className="text-sm text-white/70 font-light">Software Developer</p>
                  </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col gap-6"
              >
                <h3 className="font-semibold text-2xl">I'm <span className="highlighted-text">Architect Robust</span>, Scalable Web Solutions That Turn Bold Ideas Into Lightning-Fast, Reliable Digital Experiences.</h3>
                <p className="text-sm text-white/70 font-light">
                  I'm an approved software developer with 4+ years of experience delivering high-impact, battle-tested solutions across fintech, eCommerce, inventory, logistics, healthcare, and edtech. From zero-downtime payment gateways to real-time supply-chain dashboards, I turn complex business problems into elegant, scalable code that users trust and teams love to maintain.
                </p>
              </motion.div>
          </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="col-span-12 sm:col-span-6 lg:col-span-4 profile-box grid place-items-center"
        id="social-media"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border border-white/10 p-3 rounded-lg backdrop-blur-2xl flex flex-col w-full"
        >
          <SocialMediaCard icon={<FaLinkedin className="w-[25px] h-[25px]" />} title="LinkedIn" name="Muhamad Ferdinal" link="https://linkedin.com/in/muhamad-ferdinal/" index={0} />
          <SocialMediaCard icon={<FaGithub className="w-[25px] h-[25px]" />} title="GitHub" name="ferdinalaxewall" link="https://github.com/ferdinalaxewall/" index={1} />
          <SocialMediaCard icon={<FaGitlab className="w-[25px] h-[25px]" />} title="GitLab" name="ferdinalaxe" link="https://gitlab.com/ferdinalaxe/" index={2} />
          <SocialMediaCard icon={<FaInbox className="w-[25px] h-[25px]" />} title="Email" name="ferdinalraihan@gmail.com" link="mailto:ferdinalraihan@gmail.com" index={3} />
          <SocialMediaCard icon={<FaFilePdf className="w-[25px] h-[25px]" />} title="Resume" name="Muhamad Ferdinal" link="/documents/Resume-Muhamad-Ferdinal.pdf" index={4} />
        </motion.div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="col-span-12 sm:col-span-6 lg:col-span-3 profile-box-without-padding relative"
        id="profile-picture"
      >
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
            className="absolute right-0 bottom-0 overflow-hidden w-full h-full pt-12 ps-12"
          >
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              src="/images/ferdinalaxewall-display.jpg"
              alt="Ferdinalaxewall Profile Picture"
              className="rounded-tl-2xl w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="col-span-12 sm:col-span-6 lg:col-span-7 profile-box"
        id="experience"
      >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col mb-12"
          >
            <h2 className="font-semibold text-xl mb-4"><span className="highlighted-text">Experience</span>: Software Developer Journey</h2>
            <p>Take a scroll through my career path!</p>
            <em className="text-white/70">"Each milestone adds a new layer to my skillset, Let's dive into the journey."</em>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-row flex-wrap gap-4 2xl:gap-8 w-full justify-center"
          >
            <ExperienceCard imgLink="/images/company-logo/radar-bogor.png" position="Web Developer" year="2019" company="Radar Bogor" index={0} />
            <ExperienceCard imgLink="/images/company-logo/uncal-digital-technology.png" position="Software Developer" year="2022 - 2023" company="UNCAL Digital Technology" index={1} />
            <ExperienceCard imgLink="/images/company-logo/garap-digital-nusantara.webp" position="Fullstack Developer" year="2022" company="UNCAL Digital Technology" index={2} />
            <ExperienceCard imgLink="/images/company-logo/rembon-karya-digital.png" position="Backend Developer" year="2023 - Present" company="Rembon Karya Digital" imgClass="bg-white" index={3} />
          </motion.div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="col-span-12 sm:col-span-6 lg:col-span-5 profile-box"
        id="featured-projects"
      >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col mb-4"
          >
            <div className="flex flex-row items-center mb-4">
              <h2 className="font-semibold text-xl"><span className="highlighted-text">Featured</span> Projects</h2>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8, type: "spring", stiffness: 200 }}
                className="ms-2 bg-indigo-400 w-[20px] h-[20px] text-white rounded-full text-xs grid place-items-center -mt-4"
              >
                {projects.length}
              </motion.span>
            </div>
            <p>Showcasing my best work and technical expertise</p>
            <em className="text-white/70">"Each project represents a unique challenge conquered with code"</em>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col xl:h-[255px] overflow-y-auto custom-scrollbar"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                icon={project.icon}
                link={project.link}
                index={index}
              />
            ))}
          </motion.div>
      </motion.section>
    </main>
  );
}
