import Image from "next/image";
import Icons from "../components/icons";

interface ProjectModuleTypes {
  name: string;
  description: string;
  title: string;
  link: string;
  image: string;
  tags?: string[];
}
const ProjectModule = ({ name, title, description }: ProjectModuleTypes) => {
  return (
    <div className="group mt-5 h-auto lg:h-[200px] hover:bg-[rgb(140,52,255)] w-full flex items-center rounded-md gap-4 border border-zinc-500 relative">
      <Image
        src={"/hue-2.png"}
        className="hidden lg:block h-[100%] object-cover rounded-l-md p-[1px]"
        alt="Next.js Logo"
        width={200}
        height={600}
      />

      <div className="p-5 lg:p-3 w-full h-full flex gap-4 flex-col justify-center">
        <div>
          <h3 className="text-2xl mt-1">{name}</h3>
          <p className="text-zinc-300 font-light text-sm mt-1 group-hover:text-zinc-100">
            {title}
          </p>
        </div>
        <p className="text-sm text-zinc-400 mt-1 group-hover:text-zinc-100">
          {description}
        </p>
      </div>

      <Icons
        id="arrow-up-right"
        classes="fill-red-600 absolute top-5 right-5 group-hover:scale-150 transition-transform duration-300"
      />
    </div>
  );
};

export default ProjectModule;
