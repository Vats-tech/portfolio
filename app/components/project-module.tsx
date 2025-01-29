import Image from "next/image";
import Icons from "../components/icons";

const ProjectModule = () => {
  return (
    // <div className="mt-5 p-4 h-[154px] hover:bg-[rgb(76,219,143)] w-full flex items-center rounded-xl gap-8 border border-zinc-950 relative">
    //   <Image
    //     src={"/project-one.png"}
    //     className="h-[120px] object-cover rounded-lg"
    //     alt="Next.js Logo"
    //     width={100}
    //     height={300}
    //   />

    //   <div className="">
    //     <h3 className="text-2xl">HueFinder</h3>
    //     <p className="text-neutral-600 font-semibold">
    //       Color Picker And Conversion
    //     </p>
    //   </div>
    //   <Icons
    //     id="arrow-up-right"
    //     classes="fill-red-600 absolute top-5 right-5 hover:scale-110"
    //   />
    // </div>
    <div className="w-[300px] h-[340px] border border-slate-700 bg-zinc-950 rounded-md bg-[rgba(65,69,73,0.8)]">
      <Image
        src={"/testImage.jpg"}
        className="object-cover rounded-t-lg h-[170px]"
        alt="Next.js Logo"
        width={300}
        height={180}
      />
      <div className="p-5">
        <h3 className="text-2xl">HueFinder</h3>
        <p className="text-neutral-200 text-sm mt-3">
          Color Picker And Conversion
        </p>
      </div>
    </div>
  );
};

export default ProjectModule;
