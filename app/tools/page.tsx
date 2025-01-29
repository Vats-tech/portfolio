import Image from "next/image";
import { montserrat } from "../components/fonts";
import { toolsUsed } from "../utils/constants";
import { defineMessage } from "../utils/util";
import { useTs } from "../utils/useTs";

const tools_page_heading = defineMessage("TOOLS");

export default function ToolsPage() {
  const ts = useTs();

  return (
    <div className="mt-8">
      <h1 className="text-[54px] leading-[54px] sm:text-[80px] sm:leading-[80px] md:text-[90px] md:leading-[90px] font-black">
        {ts(tools_page_heading)}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {toolsUsed.map((tool) => (
          <div
            key={tool.name}
            className="test-tools group flex gap-3 items-center px-2 py-2 hover:bg-[rgb(140,52,255)] bg-[rgba(255,255,255,0.03)] rounded-md"
          >
            <Image
              src={`/assets/${tool.logo}`}
              width={60}
              height={60}
              alt={`${tool.name} logo`}
              className="w-[60px] h-[60px] object-contain"
            />
            <div className="text-white w-52">
              <h3 className={`${montserrat.className} font-base`}>
                {tool.name}
              </h3>
              <p
                className={`${montserrat.className} text-sm text-zinc-500 group-hover:text-zinc-100`}
              >
                {tool.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
