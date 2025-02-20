"use client";

import ExperiencePage from "../experience/page";
import ProjectPage from "../projects/page";
import ToolsPage from "../tools/page";
import { useTs } from "../utils/useTs";
import { defineMessage } from "../utils/util";

const right_panel_title = defineMessage("SOFTWARE <span>ENGINEER</span>");
const right_panel_subtitle = defineMessage(
  "Passionate frontend developer crafting seamless digital experiences, solving complex problems, and building user-friendly solutions with clean, efficient code."
  // "Passionate frontend developer dedicated to solving complex problems with clean, efficient code. I enjoy creating seamless digital experiences and optimizing performance for better user interactions. Constantly learning and innovating to bring ideas to life!"
);

const work_exp_details = defineMessage(
  "<h1>+{count}</h1><p>YEARS OF</p><p>EXPERIENCE</p>"
);

const problem_solved_details = defineMessage(
  "<h1>+{count}</h1><p>CODING PROBLEM</p><p>SOLVED</p>"
);

const project_details = defineMessage(
  "<h1>+{count}</h1><p>PROJECTS</p><p>COMPLETED</p>"
);

const workDetails = [
  {
    key: work_exp_details,
    value: 4,
  },
  {
    key: problem_solved_details,
    value: 500,
  },
  {
    key: project_details,
    value: 10,
  },
];

const RightPanel = () => {
  const ts = useTs();

  const numericModule = (
    <div className="flex justify-between flex-wrap mt-8 ">
      {workDetails.map((item, index) => (
        <div
          className="right-panel-work-details p-4 [&>p]:text-zinc-500 [&>h1]:text-[60px] [&>h1]:leading-[60px] [&>h1]:md:text-[100px] [&>h1]:md:leading-[100px] [&>h1]:font-extrabold"
          key={index}
          dangerouslySetInnerHTML={{
            __html: ts(item.key, { count: item.value }),
          }}
        ></div>
      ))}
    </div>
  );

  return (
    <>
      <h1
        className="right-panel-heading text-[54px] leading-[54px] sm:text-[80px] sm:leading-[80px] md:text-[100px] md:leading-[100px] font-black"
        dangerouslySetInnerHTML={{ __html: ts(right_panel_title) }}
      />
      <p className="text-xl mt-4 lg:w-[540px] text-zinc-500">
        {ts(right_panel_subtitle)}
      </p>
      {numericModule}
      <ExperiencePage classes="mt-8" />
      <ProjectPage classes="mt-8" />
      <ToolsPage classes="mt-8" />
    </>
  );
};

export default RightPanel;
