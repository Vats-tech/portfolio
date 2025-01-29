"use client";

import Link from "next/link";
import Icons from "@/app/components/icons";
import { usePathname } from "next/navigation";

const headerOptions = [
  {
    name: "home",
    path: "/",
    logo: <Icons id="home" />,
  },
  {
    name: "projects",
    path: "/projects",
    logo: <Icons id="projects" />,
  },
  {
    name: "experience",
    path: "/experience",
    logo: <Icons id="experience" />,
  },
  {
    name: "tools",
    path: "/tools",
    logo: <Icons id="tools" />,
  },
  {
    name: "thoughts",
    path: "/thoughts",
    logo: <Icons id="thoughts" />,
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header>
      <nav>
        <div className="fixed border border-slate-800 top-8 left-1/2 transform -translate-x-1/2 px-6 p-1 rounded-2xl bg-[rgba(0,0,0,1)] z-40 flex gap-3 items-center">
          {headerOptions.map((option) => (
            <div
              key={option.name}
              className="hover:bg-[rgb(140,52,255)] w-[36px] h-[36px] flex justify-center items-center rounded-md cursor-pointer"
              style={{
                backgroundColor:
                  pathname === option.path ? "rgb(140,52,255)" : "",
              }}
            >
              <Link href={option.path}>{option.logo}</Link>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
