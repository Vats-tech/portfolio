"use client"; // This ensures LeftPanel is client-side

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icons from "./icons";
import { montserrat } from "./fonts";
import { useTs } from "../utils/useTs";
import { defineMessage } from "../utils/util";
import { USER_DETAILS } from "../utils/constants";

const lets_talk_btn_label = defineMessage(
  "Let's Talk"
  /* Button label to render connection page*/
);

const LeftPanel = () => {
  const pathname = usePathname();

  /**
   * Show left panel only on home route for mobile device and on each route for desktop devices.
   * @returns
   */
  const showLeftPanel = () => {
    const isHomeRoute = pathname === "/";
    const isMobileDevice = window.innerWidth < 768;
    return !isMobileDevice || isHomeRoute;
  };

  /**
   * Hook to format messages
   */
  const ts = useTs();

  const userInfo = (
    <>
      <h1 className="text-3xl">{USER_DETAILS.NAME}</h1>
      <p className="mt-1">{USER_DETAILS.POSITION}</p>
      <p className="mt-1"> {USER_DETAILS.ADDRESS}</p>
    </>
  );

  return showLeftPanel() ? (
    <div className="test-left w-full lg:w-[29%] lg:sticky top-10 bg-zinc-950 border border-zinc-700 rounded-xl flex flex-col items-center justify-center gap-8 overflow-hidden h-full">
      <div className="w-full p-12 lg:p-5 flex justify-center items-center">
        <Image
          className="w-60 h-60 object-cover rounded-full"
          src="/ImageVats.jpeg"
          alt="Next.js Logo"
          width={240}
          height={240}
        />
      </div>
      <div
        className={`lower-half py-7 w-full text-center  ${montserrat.className}`}
      >
        {userInfo}
        <div className="flex gap-4 justify-center items-center mt-6 mb-3">
          <span>
            <a
              href="https://www.geeksforgeeks.org/user/1007/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="rounded"
                src="/assets/gfg.png"
                alt={"gfg logo"}
                width={20}
                height={20}
              />
            </a>
          </span>
          <span>
            <a href={USER_DETAILS.LINKEDIN} target="_blank" rel="noreferrer">
              <Icons id="linkedin" />
            </a>
          </span>
          <span>
            <a
              href={`mailto:${USER_DETAILS.EMAIL}`}
              target="_blank"
              rel="noreferrer"
            >
              <Icons id="mail" width="23" height="23" />
            </a>
          </span>
        </div>

        <Link href="/thoughts">
          <button className="p-2 px-7 bg-[rgb(140,52,255)] rounded-md border border-slate-800">
            {ts(lets_talk_btn_label)}
          </button>
        </Link>
      </div>
    </div>
  ) : null;
};

export default LeftPanel;
