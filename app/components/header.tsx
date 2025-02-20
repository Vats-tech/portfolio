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
    name: "experience",
    path: "/experience",
    logo: <Icons id="experience" />,
  },
  {
    name: "projects",
    path: "/projects",
    logo: <Icons id="projects" />,
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
          <div>
            <a
              href="VatsReumse-12-13-2024.pdf"
              download="SaurabhVatsResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:bg-[rgb(140,52,255)] w-[36px] h-[36px] flex justify-center items-center rounded-full cursor-pointer"
            >
              <Icons id="download" classes="animate-bounce" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
