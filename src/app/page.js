import { FaFilePdf, FaGithub, FaGitlab, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SocialMediaCard } from "@/components/card/SocialMediaCard";
import { ExperienceCard } from "@/components/card/ExperienceCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-12 lg:grid-rows-2 gap-2 items-stretch justify-center h-full w-ful my-auto mx-0 min-h-screen p-4">
      <div className="col-span-12 sm:col-span-12 lg:col-span-5 profile-box">
          <div className="flex flex-col justify-center   gap-12 items-start h-full">
              <div className="flex flex-row flex-wrap items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-indigo-500 rounded-full grid place-items-center text-xl">
                    👋
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-medium">Hi, I'm Ferdinalaxewall</h1>
                    <p className="text-sm text-white/70 font-light">Software Developer</p>
                  </div>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="font-semibold text-3xl">I'm Architect Robust, Scalable Web Solutions That Turn Bold Ideas Into Lightning-Fast, Reliable Digital Experiences.</h3>
                <p className="text-sm text-white/70 font-light">
                  I'm an approved software developer with 4+ years of experience delivering high-impact, battle-tested solutions across fintech, eCommerce, inventory, logistics, healthcare, and edtech. From zero-downtime payment gateways to real-time supply-chain dashboards, I turn complex business problems into elegant, scalable code that users trust and teams love to maintain.
                </p>
              </div>
          </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4 profile-box grid place-items-center">
        <div className="border border-white/20 p-3 rounded-lg backdrop-blur-2xl flex flex-col w-full">
          <SocialMediaCard icon={<FaLinkedin className="w-[25px] h-[25px]" />} title="LinkedIn" name="Muhamad Ferdinal" link="https://linkedin.com/in/ferdinalaxewall/" />
          <SocialMediaCard icon={<FaGithub className="w-[25px] h-[25px]" />} title="GitHub" name="ferdinalaxewall" link="https://github.com/ferdinalaxewall/" />
          <SocialMediaCard icon={<FaGitlab className="w-[25px] h-[25px]" />} title="GitLab" name="ferdinalaxe" link="https://gitlab.com/ferdinalaxe/" />
          <SocialMediaCard icon={<FaInstagram className="w-[25px] h-[25px]" />} title="Instagram" name="@ferdinalaxewall" link="https://instagram.com/ferdinalaxewall/" />
          <SocialMediaCard icon={<FaFilePdf className="w-[25px] h-[25px]" />} title="Resume" name="Muhamad Ferdinal" link="/documents/Resume-Muhamad-Ferdinal.pdf" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 profile-box-without-padding relative">
          <div className="absolute right-0 bottom-0 overflow-hidden w-full h-full pt-12 ps-12 ">
            <img src="/images/ferdinalaxewall-display.jpg" alt="Ferdinalaxewall Profile Picture" className="rounded-tl-2xl w-full h-full object-cover" />
          </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-7 profile-box">
          <div className="flex flex-col mb-12">
            <h2 className="font-medium text-2xl mb-4">Experience: Software Developer Journey</h2>
            <p>Take a scroll through my career path!</p>
            <em className="text-white/70">"Each milestone adds a new layer to my skillset, Let's dive into the journey."</em>
          </div>
          <div className="flex flex-row flex-wrap gap-4 md:gap-8 w-full justify-center">
            <ExperienceCard imgLink="/images/company-logo/radar-bogor.png" position="Web Developer" year="2019" company="Radar Bogor" />
            <ExperienceCard imgLink="/images/company-logo/uncal-digital-technology.png" position="Software Developer" year="2022 - 2023" company="UNCAL Digital Technology" />
            <ExperienceCard imgLink="/images/company-logo/garap-digital-nusantara.webp" position="Fullstack Developer" year="2022" company="UNCAL Digital Technology" />
            <ExperienceCard imgLink="/images/company-logo/rembon-karya-digital.png" position="Backend Developer" year="2023" company="Rembon Karya Digital" imgClass="bg-white" />
          </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-5 profile-box">
          Box Satu
      </div>
    </div>
  );
}
