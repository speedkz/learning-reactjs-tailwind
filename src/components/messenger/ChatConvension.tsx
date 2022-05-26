import { ContactUser } from "types/ContactUser";
import ChatConvensionHeader from "./ChatConvensionHeader";
import ChatConvensionMessages from "./ChatConvensionMessages";

const ChatConvension = ({ contact }: { contact: ContactUser }) => {
  return (
    <div className="h-full flex flex-col">
      <ChatConvensionHeader contact={contact} />
      <ChatConvensionMessages />
    </div>
  );
};

export default ChatConvension;
