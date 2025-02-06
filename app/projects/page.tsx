import { montserrat } from "../components/fonts";
import ProjectModule from "../components/project-module";
import { projectDetails } from "../utils/constants";
import { useTs } from "../utils/useTs";
import { defineMessage } from "../utils/util";

const project_page_heading = defineMessage("RECENT <span>PROJECTS</span>");

interface ProjectPageTypes {
  styles: string;
}

export default function ProjectPage({ styles }: ProjectPageTypes) {
  const ts = useTs();

  return (
    <div
      className={`${styles} lg:w-[696px] flex-1 whitespace-pre-wrap break-words overflow-auto`}
    >
      <h1
        className="project-page-title text-[54px] leading-[54px] sm:text-[80px] sm:leading-[80px] md:text-[90px] md:leading-[90px] font-black [&>span]:text-zinc-500"
        dangerouslySetInnerHTML={{ __html: ts(project_page_heading) }}
      ></h1>
      <div
        className={`flex flex-wrap justify-between gap-4 mt-8 ${montserrat.className}`}
      >
        {projectDetails.map((project, index) => (
          <ProjectModule
            key={index}
            name={project.name}
            title={project.title}
            description={project.description}
            // tags={project.tags}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
