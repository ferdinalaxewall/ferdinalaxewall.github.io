import Image from "next/image";

export const ExperienceCard = ({ imgLink, position, year, company, imgClass }) => {
  return (
    <div className="flex flex-col border border-white/20 items-center justify-center text-center rounded-lg py-6 px-3 gap-8 w-[200px] h-[250px]">
        <div className={`w-[75px] h-[75px] grid place-items-center p-2 rounded-full  ${imgClass}`}>
            <Image src={imgLink} width={75} height={75} alt={company} />
        </div>
        <div className="flex flex-col">
            <p className="text-sm font-semibold mb-2">{position}</p>
            <h3 className="text-xs font-light text-white/70">{year}</h3>
        </div>
    </div>
  )
}
