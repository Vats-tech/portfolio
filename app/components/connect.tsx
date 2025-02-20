"use client"; // This ensures LeftPanel is client-side

import { useEffect, useRef, useState } from "react";
import { useTs } from "../utils/useTs";
import { defineMessage } from "../utils/util";
import emailjs from "@emailjs/browser";
import Icons from "./icons";

const connect_module_heading = defineMessage(
  "LET&apos;S WORK <span>TOGETHER</span>"
);

const name_label = defineMessage(
  "Name"
  /* Name label */
);

const email_label = defineMessage(
  "Email"
  /* Email label*/
);

const message_label = defineMessage(
  "Message"
  /*Message label */
);

const submit_button_label = defineMessage(
  "Submit"
  /** Submit button label */
);

const name_input_box_placeholder = defineMessage(
  "Your Name"
  /**Placeholder label for name input box */
);

const email_input_box_placeholder = defineMessage(
  "Your Email"
  /**Placeholder label for email input box */
);

interface ConnectTypes {
  styles?: string;
}

const Connect = ({ ...props }: ConnectTypes) => {
  const ts = useTs();
  const [isSending, setIsSending] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [buttonLabel, setButtonLabel] = useState(ts(submit_button_label));

  /**
   * Reset button label to default after 2 seconds.
   */
  const resetButtonLabelToDefault = () => {
    // TODO - Replace with a toast
    timeoutRef.current = setTimeout(() => {
      setButtonLabel(ts(submit_button_label));
      setIsSending(false);
    }, 3000);
  };

  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    setIsSending(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setButtonLabel("Message Sent Successfully!");
          form.current?.reset(); // Clear the form
          resetButtonLabelToDefault();
        },
        (error) => {
          console.error("Error:", error);
          setButtonLabel("Failed to send message. Try again later.");
          alert("Failed to send message. Try again later.");
          resetButtonLabelToDefault();
        }
      );
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // clear the timeout when the component is unmounted
      }
    };
  }, []);

  return (
    <div className={props.styles}>
      <h1
        className="text-[54px] leading-[54px] lg:text-[90px] lg:leading-[90px] font-black [&>span]:text-zinc-500"
        dangerouslySetInnerHTML={{ __html: ts(connect_module_heading) }}
      />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="border border-zinc-800 rounded-xl mt-4 p-6 text-sm text-start"
      >
        <div className="flex flex-col gap-5">
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="name">{ts(name_label)}</label>
            <input
              required
              className="flex-1 p-2 rounded-md bg-zinc-700 w-full"
              type="text"
              id="name"
              name="name"
              placeholder={`${ts(name_input_box_placeholder)}`}
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="email">{ts(email_label)}</label>
            <input
              required
              className="flex-1 p-2 rounded-md bg-zinc-700 w-full"
              type="email"
              id="email"
              name="email"
              placeholder={`${ts(email_input_box_placeholder)}`}
            />
          </div>
          <div>
            <label htmlFor="message">{ts(message_label)}</label>
            <textarea
              required
              rows={6}
              name="message"
              placeholder={`${ts(message_label)}`}
              className="mt-3 rounded-md bg-zinc-700 w-full p-2"
            ></textarea>
          </div>
          <button
            className="w-full flex justify-center items-center gap-3 p-2 rounded-md bg-[rgb(140,52,255)] disabled:bg-slate-800 disabled:text-slate-300"
            type="submit"
            disabled={isSending}
          >
            {buttonLabel}
            {isSending && (
              <Icons
                id="circle"
                width="10"
                height="10"
                classes="animate-spin fill-white bg-white"
              />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Connect;
