import { LuCircleArrowOutUpRight } from "react-icons/lu";

export const SocialMediaCard = ({ icon, title, name, link}) => {
  return (
    <div className="social-media-box">
        <div className="flex flex-row items-center gap-4">
            <div className="text-indigo-400 bg-black p-2 rounded">
                {icon}
            </div>
            <div className="flex flex-col">
                <p className="text-xs text-white/70 font-light">{title}</p>
                <h3 className="text-sm font-medium">{name}</h3>
            </div>
        </div>

        <a href={link} target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-105 hover:translate-x-0.5 hover:-translate-y-0.5 hover:opacity-80">
            <LuCircleArrowOutUpRight className="w-[20px] h-[20px] text-white" />
        </a>
    </div>
  )
}
