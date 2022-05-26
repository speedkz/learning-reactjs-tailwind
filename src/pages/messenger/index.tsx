import ChatConvension from "components/messenger/ChatConvension";
import ContactList from "components/messenger/ContactList";
import Directory from "components/messenger/Directory";
import Sidebar from "components/messenger/Sidebar";
import { createContext, useState } from "react";
import { ContactUser } from "types/ContactUser";

export const CurrentContactContext = createContext<{
  contact: ContactUser;
  setContact: React.Dispatch<React.SetStateAction<ContactUser>>;
}>({
  contact: {} as ContactUser,
  setContact: () => {},
});

const Messenger = () => {
  const [currentContact, setCurrentContact] = useState({} as ContactUser);
  return (
    <CurrentContactContext.Provider
      value={{ contact: currentContact, setContact: setCurrentContact }}
    >
      <div className="flex bg-white h-screen overflow-y-hidden">
        <Sidebar />
        <ContactList />
        <div className="grow border-r">
          <ChatConvension contact={currentContact} />
        </div>
        <div className="w-[362px]">
          <Directory />
        </div>
      </div>
    </CurrentContactContext.Provider>
  );
};

export default Messenger;
