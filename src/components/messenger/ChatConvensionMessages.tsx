import Input from "components/ui/Input";
import { Convension, ConvensionContent } from "types/Convension";
import { Paperclip } from "react-feather";

const CONVENSIONS: Convension = require("static/convension.json");

const ChatConvensionMessages = () => {
  const { content } = CONVENSIONS;
  const isNextMessage = (index: number) => {
    return (
      content[index - 1] && content[index - 1].from === content[index].from
    );
  };
  const isLeftMessage = (content: ConvensionContent) => {
    return content.from === "1";
  };

  return (
    <div className="pb-6">
      <div className="h-full relative p-6 overflow-y-auto h-[calc(100vh-144px)]">
        {content.map((convension, i) => (
          <div
            key={i}
            className={
              "flex gap-x-4" +
              (isLeftMessage(convension) ? "" : " flex-row-reverse") +
              (isNextMessage(i) ? "" : "")
            }
          >
            {!isNextMessage(i) && (
              <img
                src={convension.image}
                alt=""
                className="rounded-md w-10 h-10 object-cover"
              />
            )}

            <p
              className={
                "rounded-xl px-4 py-2 text-sm mb-2.5" +
                (isNextMessage(i)
                  ? isLeftMessage(convension)
                    ? " ml-14"
                    : " mr-14"
                  : "") +
                (isLeftMessage(convension)
                  ? " bg-slate-100 text-slate-800"
                  : " bg-violet-500 text-white")
              }
            >
              {convension.message}
            </p>
          </div>
        ))}
      </div>
      <div className="px-6 flex items-center gap-x-6">
        <div className="text-slate-400">
          <Paperclip size={20} />
        </div>
        <Input
          bg="bg-white"
          className="w-full"
          placeholder="Type a message"
          appendIcon="Send"
          size={20}
        />
      </div>
    </div>
  );
};

export default ChatConvensionMessages;
