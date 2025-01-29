import { montserrat } from "../components/fonts";
import { experienceDetails } from "../utils/constants";

export default function ExperiencePage() {
  return (
    <div className="mt-8">
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
            <h1 className="text-xl">
              {experience.company}
              <span className="text-[10px] ml-2">{experience.field}</span>
            </h1>
            <div className="text-zinc-400 group-hover:text-zinc-100">
              <p className="mt-2 mb-2 text-sm">{experience.role}</p>
              <p className="text-sm">{experience.description}</p>
              <p className="text-sm mt-3">
                {experience.from} - {experience.to}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
