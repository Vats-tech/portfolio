import { montserrat } from "../components/fonts";
import { experienceDetails } from "../utils/constants";

interface ExperienceTypes {
  styles: string;
}

export default function ExperiencePage({ styles }: ExperienceTypes) {
  return (
    <div className={styles}>
      <h1 className="text-[54px] leading-[54px] sm:text-[80px] sm:leading-[80px] md:text-[90px] md:leading-[90px] font-black">
        <span>+4 YEARS OF </span>
        <span className="text-zinc-700">EXPERIENCE</span>
      </h1>
      <div className="mt-8 text-start">
        {experienceDetails.map((experience) => (
          <div
            key={`${experience.company}-${experience.from}`}
            className={`test-exp group p-6 rounded-md mt-4 bg-[rgba(0,0,0,1)] sm:bg-inherit hover:bg-[rgb(140,52,255)] ${montserrat.className}`}
          >
            <div className="flex">
              <h1 className="text-2xl">{experience.company}</h1>
              <span className="text-[10px]">{experience.field}</span>
            </div>
            <div className="text-zinc-400 group-hover:text-zinc-100">
              <div className="my-2">
                <span>{experience.role}</span>
                <span className="text-[12px] ml-4">
                  {experience.from} - {experience.to}
                </span>
              </div>
              <p className="text-sm">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
