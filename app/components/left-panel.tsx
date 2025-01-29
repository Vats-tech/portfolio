import Image from "next/image";
import Icons from "./icons";
import { montserrat } from "./fonts";
import { useTs } from "../utils/useTs";
import { defineMessage } from "../utils/util";

const user_name = defineMessage(
  "{name}"
  /* User name label */
);

const user_role = defineMessage(
  "{role}"
  /* User role label */
);

const user_location = defineMessage(
  "{city}"
  /* User location label */
);
const user_linkedin = defineMessage(
  "linkedin.com/in/saurabh-vats"
  /* User linkedin link */
);

const user_mail = defineMessage(
  "test@gmail.com"
  /* User gmail */
);

const lets_talk_btn_label = defineMessage(
  "Let's Talk"
  /* Button label to render connection page*/
);

const LeftPanel = () => {
  const ts = useTs();

  const userInfo = (
    <>
      <h1 className="text-3xl">{ts(user_name, { name: "Saurabh Vats" })}</h1>
      <p>{ts(user_role, { role: "Software Engineer ( FE )" })}</p>
      <p>{ts(user_location, { city: "Pune" })}</p>
    </>
  );

  return (
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
        <div className=" flex gap-4 justify-center items-center my-4">
          <span>
            <Icons id="linkedin" />
          </span>
          <span>
            <Icons id="mail" />
          </span>
        </div>

        <button className="p-2 px-7 bg-[rgb(140,52,255)] rounded-md border border-slate-800">
          {ts(lets_talk_btn_label)}
        </button>
      </div>
    </div>
  );
};

export default LeftPanel;
