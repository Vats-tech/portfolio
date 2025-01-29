import { montserrat } from "../components/fonts";
import ProjectModule from "../components/project-module";
import { useTs } from "../utils/useTs";
import { defineMessage } from "../utils/util";

const project_page_heading = defineMessage("RECENT <span>PROJECTS</span>");

export default function ProjectPage() {
  const ts = useTs();

  return (
    <div className="mt-8 lg:w-[696px] flex-1 whitespace-pre-wrap break-words overflow-auto">
      <h1
        className="project-page-title text-[54px] leading-[54px] sm:text-[80px] sm:leading-[80px] md:text-[90px] md:leading-[90px] font-black [&>span]:text-zinc-500"
        dangerouslySetInnerHTML={{ __html: ts(project_page_heading) }}
      ></h1>
      <div
        className={`flex flex-wrap justify-between gap-4 px-6 mt-8 ${montserrat.className}`}
      >
        {[1, 2, 3, 4].map((project) => (
          <ProjectModule key={project} />
        ))}
      </div>
    </div>
  );
}
