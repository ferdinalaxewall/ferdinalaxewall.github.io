import { HiOutlineArrowCircleRight } from "react-icons/hi";

export const ProjectCard = ({ title, description, icon, link }) => {
  return (
    <div className="project-box">
      <div className="flex items-center gap-4">
          <div className="grid place-items-center  text-indigo-400 bg-indigo-500/10 p-3 rounded-lg">
            {icon}
          </div>
          <div className="flex flex-col">
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-white/70 font-light">{description}</p>
          </div>
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="transition-all hover:translate-x-0.5 hover:opacity-80">
          <HiOutlineArrowCircleRight className="w-[30px] h-[30px] text-white" />
        </a>
      )}
    </div>
  );
};